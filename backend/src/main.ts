import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
// import {ValidationPipe} from "@nestjs/common";
import {PrismaClient} from "@prisma/client";
import * as argon from 'argon2'


const prisma = new PrismaClient()

async function initDB() {
    const users = await prisma.user.findMany()
    const persons = await prisma.person.findMany()
    const departments = await prisma.department.findMany()
    const accessGroups = await prisma.accessGroup.findMany()
    if (users.length + persons.length + departments.length + accessGroups.length === 0) {
        const password = await argon.hash('')

        await prisma.user.create({
            data: {
                login: 'Администратор',
                password
            }
        })
        await prisma.department.create({
            data: {
                title: 'Организация'
            }
        })
        await prisma.accessGroup.create({
            data: {
                title: 'Доступ всегда.'
            }
        })
        await prisma.person.create({
            data: {
                firstName: 'Сотрудник'
            }
        })
    }
}

// const PORT = process.env('PORT') || 8080

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api')
    // app.useGlobalPipes(new ValidationPipe({
    //     whitelist: true
    // }))
    initDB().finally(async () => {
        await prisma.$disconnect()
    })
    await app.listen(8080);
}

bootstrap();
