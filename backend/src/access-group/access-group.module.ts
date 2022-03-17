import { Module } from '@nestjs/common';
import { AccessGroupController } from './access-group.controller';
import { AccessGroupService } from './access-group.service';

@Module({
  controllers: [AccessGroupController],
  providers: [AccessGroupService]
})
export class AccessGroupModule {}
