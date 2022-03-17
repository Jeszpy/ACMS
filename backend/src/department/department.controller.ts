import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {DepartmentService} from "./department.service";
import {DepartmentDto} from "./dto";

@Controller('department')
export class DepartmentController {
    constructor(private departmentService: DepartmentService) {
    }

    @Get('list')
    departmentList(){
        return this.departmentService.departmentList()
    }

    @Post('create')
    createDepartment(@Body() dto: DepartmentDto){
        return this.departmentService.createDepartment(dto)
    }

    @Put('update')
    updateDepartment(@Body() dto: DepartmentDto){
        return this.departmentService.updateDepartment(dto)
    }

    @Delete('delete/:id')
    deleteDepartment(@Param() param){
        const id = Number(param.id)
        return this.departmentService.deleteDepartment(id)
    }
}
