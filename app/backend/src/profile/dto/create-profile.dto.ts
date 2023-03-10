import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty({
    description: 'The name of the User',
    example: 'Jhon Doe',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The email address of the User',
    example: 'jhon.doe@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the User',
    example: 'Technology',
  })
  ocupation: string;

  @ApiProperty({
    description: 'The password of the User',
    example: 'john@dell.com',
  })
  linkedin: string;

  @ApiProperty({
    description: 'The password of the User',
    example: '+1 555 101 230',
  })
  contact: number;

  @ApiProperty({
    description: 'The password of the User',
    example: 'USA',
  })
  country: string;

  @ApiProperty({
    description: 'The password of the User',
    example: 'LA',
  })
  city: string;

  @ApiProperty({
    description: 'The password of the User',
    example: 'CA',
  })
  state: string;

  @ApiProperty({
    description: 'The password of the User',
    example: 'Calm',
  })
  softskills: string;

  @ApiProperty({
    description: 'The password of the User',
    example: 'Java',
  })
  hardskills: string;
  
  @ApiProperty({
    description: 'The password of the User',
    example: 'None',
  })
  otherskills: string;
}
