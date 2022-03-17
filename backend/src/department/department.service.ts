import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class DepartmentService {
    constructor(private prisma: PrismaService) {
    }

    async departmentList() {
        try {
            const departments = await this.prisma.department.findMany({
                select: {
                    id: true,
                    title: true
                }
            })
            return departments
        } catch (error) {
            return error
        }
    }

    async createDepartment(dto) {
        try {
            await this.prisma.department.create({
                data: {
                    title: dto.title
                }
            })
            return true
        } catch (error) {
            return error
        }
    }

    async updateDepartment(dto) {
        try {
            await this.prisma.department.update({
                where: {
                    id: dto.id
                },
                data: {
                    title: dto.title
                }
            })
            return true
        } catch (error) {
            return error
        }
    }

    async deleteDepartment(id) {
        try {
            await this.prisma.department.delete({
                where: {
                    id: id
                }
            })
            return true
        } catch (error) {
            return error
        }
    }
}

// try {
//
//     return true
// } catch (error){
//     return error
// }