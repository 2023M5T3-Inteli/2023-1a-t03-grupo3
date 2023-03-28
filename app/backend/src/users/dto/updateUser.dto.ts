//create a dto for updating a user
// Path: src/users/dto/updateUser.dto.ts
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    fullName: string;

    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    hashedPassword: string;

    @IsString()
    @IsOptional()
    occupation: string;

    @IsString()
    @IsOptional()
    picture: string;

    @IsString()
    @IsOptional()
    city: string;

    @IsString()
    @IsOptional()
    state: string;

    @IsString()
    @IsOptional()
    country: string;

    @IsString()
    @IsOptional()
    hardSkills: string;

    @IsString()
    @IsOptional()
    softSkills: string;
}
