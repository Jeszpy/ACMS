import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [AuthModule, PersonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
