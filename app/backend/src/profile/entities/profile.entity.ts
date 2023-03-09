import { ApiProperty } from "@nestjs/swagger";

export class Profile {
  @ApiProperty({example: 'Amet Mattis Vulputate', description: 'The name of one random user'})
  name: string;
  @ApiProperty({example: 'Software Engineer', description: 'The occupation one random user'})
  ocupation: string;
  @ApiProperty({example: 'Amet@dell.com', description: 'The email of one random user'})
  email: string;
  @ApiProperty({example: 'linkedin.com/in/amet', description: 'The linkedin of one random user'})
  linkedin: string;
  @ApiProperty({example: 99999999999, description: 'The number of one random user'})
  contact: number;
  @ApiProperty({example: 'USA', description: 'The country of one random user'})
  country: string;
  @ApiProperty({example: 'California', description: 'The state of one random user'})
  state: string;
  @ApiProperty({example: 'LA', description: 'The city of one random user'})
  city: string;
  @ApiProperty({example: 'Programming', description: 'The hardskill of one random user'})
  hardskills: string;
  @ApiProperty({example: 'Calm', description: 'The softskill of one random user'})
  softskills: string;
  @ApiProperty({example: 'None', description: 'The other skills of one random user'})
  otherskills: string;
}
