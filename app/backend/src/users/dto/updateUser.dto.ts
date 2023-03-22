//create a dto for updating a user
// Path: src/users/dto/updateUser.dto.ts
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
