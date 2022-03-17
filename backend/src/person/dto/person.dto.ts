import {IsNotEmpty, IsArray, IsNumber, IsString, IsInt, Min} from "class-validator";


export class PersonDto {
    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    secondName: string

    @IsString()
    lastName: string

    personnelNumber: number | undefined

    @IsNumber()
    @IsNotEmpty()
    accessGroupID: number

    @IsNumber()
    @IsNotEmpty()
    departmentID: number

    @IsString()
    advanced: string

    identifiers: string[]

    @IsInt()
    @IsNotEmpty()
    personId: number

    @IsString()
    identifier: string
}