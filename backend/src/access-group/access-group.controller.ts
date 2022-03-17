import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AccessGroupService} from "./access-group.service";
import {AccessGroupDto} from "./dto";

@Controller('accessGroup')
export class AccessGroupController {
    constructor(private accessGroupService: AccessGroupService) {
    }

    @Get('list')
    accessGroupsList() {
        return this.accessGroupService.accessGroupsList()
    }

    @Post('create')
    createAccessGroup(@Body() dto: AccessGroupDto) {
        return this.accessGroupService.createAccessGroup(dto)
    }

    @Put('update')
    updateAccessGroup(@Body() dto: AccessGroupDto) {
        return this.accessGroupService.updateAccessGroup(dto)
    }

    @Delete('delete/:id')
    deleteAccessGroup(@Param() params) {
        const id = Number(params.id)
        return this.accessGroupService.deleteAccessGroup(id)
    }
}
