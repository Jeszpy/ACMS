import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PersonDto } from './dto';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}


  // TODO: доделать названия группы доступа и подразделения
  async onePerson(id: number) {
    try {
      let person = await this.prisma.person.findFirst({
        where: {
          id: id,
        },
      });
      delete person.createdAt;
      delete person.updatedAt;
      const accessGroupID = person.accessGroupID
      const departmentID = person.departmentID
      const accessGroup = await this.prisma.accessGroup.findUnique({
        where: {
          id: accessGroupID
        }
      })
      const identifiers = await this.prisma.identifier.findMany({
        where: {
          personId: id,
        },
        select: {
          identifier: true,
          blocked: true,
        },
      });
      person['identifiers'] = identifiers;
      console.log(person);
    } catch (error) {
      return error
    }
  }

  async personList() {
    try {
      let persons = await this.prisma.person.findMany();
      let item = persons.map((el) => console.log(el))
      console.log(persons)
      return persons
    } catch (error) {
      return error
    }
  }

  async createPerson(dto: PersonDto) {
    try {
      const person = await this.prisma.person.create({
        data: {
          firstName: dto.firstName,
          secondName: dto.secondName,
          lastName: dto.lastName,
          personnelNumber: dto.personnelNumber,
          accessGroupID: dto.accessGroupID,
          departmentID: dto.departmentID,
          advanced: dto.advanced,
        },
      });
      const personID = person.id;
      try {
        if (dto.identifiers.length === 0) {
          await this.prisma.identifier.create({
            data: {
              personId: personID,
              identifier: '',
            },
          });
          return true;
        } else {
          for (let i = 0; i < dto.identifiers.length; i++) {
            const identifier = dto.identifiers[i];
            const inDB = await this.prisma.identifier.findFirst({
              where: {
                identifier: identifier,
              },
            });
            if (!inDB) {
              await this.prisma.identifier.create({
                data: {
                  personId: personID,
                  identifier: identifier,
                },
              });
            } else {
              return new ForbiddenException(
                `Ошибка! Индификатор ${identifier} уже присвоен другому пользователю!`,
              );
            }
          }
          return true;
        }
      } catch (error) {
        console.log(error);
      }

      return;
    } catch (error) {
      console.log(error);
    }
  }

  async updatePerson(dto: PersonDto) {
    try {
      console.log(dto);
      const personID = dto.personId;
    } catch (error) {
      console.log(error);
    }
  }

  async deletePerson(id: number) {
    try {
      await this.prisma.person.delete({
        where: {
          id: id,
        },
      });
      await this.prisma.identifier.deleteMany({
        where: {
          personId: id,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}
