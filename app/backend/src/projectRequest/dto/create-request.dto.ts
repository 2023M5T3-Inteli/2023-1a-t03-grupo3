import { ApiProperty } from '@nestjs/swagger';
export class createRequestDto {
  @ApiProperty({
    example: 'Increase Online Sales',
    description: 'Project for marketing',
  })
  project: string;
  @ApiProperty({ example: 'Arrascaneta', description: 'The manager' })
  manager: string;
  @ApiProperty({
    example: 'any@delltechonologies.com',
    description: "User's e-mail",
  })
  email: string;
  @ApiProperty({ example: 'Jorge', description: 'Candidato' })
  name: string;
}
