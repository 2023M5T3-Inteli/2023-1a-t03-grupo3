
import { IsArray, IsDate, IsDateString, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateProjectDto {
    @IsNotEmpty()
    @IsString()
    public title: string;

    @IsNotEmpty()
    @IsString()
    public description: string;

    @IsNotEmpty()
    @IsString()
    @IsDateString()
    public startDate: string;

    @IsNotEmpty()
    @IsString()
    @IsDateString()
    public endDate: string;

    @IsNotEmpty()
    @IsString()
    public category: string;

    @IsNotEmpty()
    @IsString()
    public status: string;

    @IsNotEmpty()
    @IsArray()
    public tags: string[];
}