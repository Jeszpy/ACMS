import {IsNotEmpty, IsArray, IsNumber, IsString, IsInt, Min} from "class-validator";


export class AccessGroupDto {
    @IsString()
    @IsNotEmpty()
    title: string
}