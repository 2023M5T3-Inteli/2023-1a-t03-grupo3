import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: 'fullName', description: 'fullName'})
    public fullName: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty({example: 'email', description: 'email'})
    public email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: 'password', description: 'password'})
    @Length(3, 20, { message: 'Password must be between 3 and 20 characters' })
    public password: string;
}