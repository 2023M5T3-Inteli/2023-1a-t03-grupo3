import { ApiProperty } from "@nestjs/swagger";

export class CreateRankingDto {
    @ApiProperty({example: 'Annie', description: 'Username'})
    username?: string;

    @ApiProperty({example: 40, description: 'Rating of the user according to projects that he/she has completed'})
    score?: number;
}
