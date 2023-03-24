
// import { IsArray, IsDate, IsDateString, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

import { ApiProperty } from "@nestjs/swagger";

// export class CreateNotificationDto {
//     @IsNotEmpty()
//     @IsString()
//     public title: string;

//     @IsNotEmpty()
//     @IsString()
//     public description: string;

//     @IsNotEmpty()
//     @IsString()
//     public type: string;

//     @IsNotEmpty()
//     @IsString()
//     public status: string;

// }
export class CreateNotificationDto{
    @ApiProperty({example: 'id', description: 'id'})
    id:number
    @ApiProperty({example: 'sender', description: 'sender'})
    sender: number;
    @ApiProperty({example: 'description', description: 'description'})
    description: string;
    @ApiProperty({example: 'type', description: 'type'})
    type:string;
    @ApiProperty({example: 'aproved', description: 'aproved'})
    aproved:boolean;
    @ApiProperty({example: 'receiver', description: 'receiver'})
    receiver:number;
}