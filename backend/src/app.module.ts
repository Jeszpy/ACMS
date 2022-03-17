import {Module} from '@nestjs/common';
import {AuthModule} from './auth/auth.module';
import {PersonModule} from './person/person.module';
import {PrismaModule} from './prisma/prisma.module';
import {ConfigModule} from "@nestjs/config";
import {AccessGroupModule} from './access-group/access-group.module';
import {DepartmentModule} from './department/department.module';

// TODO: создать сервис который при старте инициализирует огр. деп. юзер
@Module({
    imports: [ConfigModule.forRoot({
        isGlobal: true
    }), PrismaModule, AuthModule, PersonModule, AccessGroupModule, DepartmentModule],
})
export class AppModule {
}