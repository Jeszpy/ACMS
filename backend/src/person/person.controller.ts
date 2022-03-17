import {Body, Controller, Delete, Get, Post, Put, Param} from '@nestjs/common';
import {PersonService} from "./person.service";
import {PersonDto} from "./dto";


@Controller('person')
export class PersonController {
    constructor(private personService: PersonService) {
    }

    @Get('one/:id')
    onePerson(@Param() params) {
        const id = Number(params.id)
        return this.personService.onePerson(id)
    }

    @Get('list')
    personList() {
        return this.personService.personList()
    }

    @Post('create')
    createPerson(@Body() dto: PersonDto) {
        return this.personService.createPerson(dto)
    }

    @Put('update')
    updatePerson(@Body() dto: PersonDto) {
        return this.personService.updatePerson(dto)
    }

    @Delete('delete/:id')
    deletePerson(@Param() params) {
        const id = Number(params.id)
        return this.personService.deletePerson(id)
    }
}
