import {IsNotEmpty, IsArray, IsNumber, IsString, IsInt, Min} from "class-validator";

export class DepartmentDto{
    @IsInt()
    @IsNotEmpty()
    id: number

    @IsString()
    @IsNotEmpty()
    title: string
}