import {ForbiddenException, Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {PrismaClientKnownRequestError} from '@prisma/client/runtime'
import {AuthDto} from "./dto";
import * as argon from 'argon2'

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {
    }

    async createUser(dto: AuthDto) {
        const password = await argon.hash(dto.password)
        try {
            const user = await this.prisma.user.create({
                data: {
                    login: dto.login,
                    password
                },
                // select - если надо выбрать несколько полей
                // из возвращаемого объекта
            })
            delete user.password
            return user
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException(
                        'Ошибка! Такой логин уже существует.'
                    )
                }
            }
            throw error
        }
    }

    async login(dto: AuthDto) {
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        const user = await this.prisma.user.findUnique({
            where: {
                login: dto.login,
            }
        })
        if (!user)  {
            throw new ForbiddenException(
                'Ошибка! Такого пользователя не существует.'
            )
        }

        return 'im signin'
    }


}
