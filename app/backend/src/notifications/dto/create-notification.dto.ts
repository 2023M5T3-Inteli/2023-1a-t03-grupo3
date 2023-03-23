
// import { IsArray, IsDate, IsDateString, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

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
    id:number
    sender: number;
    description: string;
    type:string;
    aproved:boolean;
    receiver:number;
}