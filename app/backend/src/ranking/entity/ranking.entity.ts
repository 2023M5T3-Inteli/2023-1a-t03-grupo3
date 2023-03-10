import { ApiProperty } from '@nestjs/swagger';

export class Ranking {
    @ApiProperty({example: 'Amet Mattis Vulputate', description: 'The name of one random user'}) 
    name: string;

    @ApiProperty({example: 1, description: 'The score of one random user'})
    score: number;
}