
import { ParseArrayPipe } from "@nestjs/common";
import { isArray, IsArray, IsDate, IsDateString, IsEmail, IsNotEmpty, IsObject, IsString, Length } from "class-validator";

interface Role {
    role: string,
    amount: number,
    applied: number
}

export class CreateProjectDto {
    @IsNotEmpty()
    @IsString()
    public title: string;

    @IsNotEmpty()
    @IsString()
    public description: string;

    @IsNotEmpty()
    @IsString()
    public startDate: string;

    @IsNotEmpty()
    @IsString()
    public endDate: string;

    @IsNotEmpty()
    @IsString()
    public category: string;

    @IsArray()
    @IsNotEmpty()
    public questions: string[];

    @IsNotEmpty()
    @IsArray()
    public tags: string[];
}