import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PersonModule } from './person/person.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, PersonModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
