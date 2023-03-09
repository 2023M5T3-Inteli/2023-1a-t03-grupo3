import { ApiProperty } from '@nestjs/swagger';

export class Homepage {
  @ApiProperty({
    example: 'Lorem ipsum',
    description: 'The name of one random project',
  })
  projectName: string;

  @ApiProperty({
    example:
      'Lorem ipsum dolor sit amet. Quo iste error ut nulla nesciunt et consequuntur facilis aut doloremque debitis',
    description: 'The description of the project',
  })
  description: string;
}
