import { ApiProperty } from "@nestjs/swagger";

export class CreateRankingDto {
    id?: number;

    @ApiProperty({example: 'Annie', description: 'Username'})
    username?: string;

    @ApiProperty({example: 40, description: 'Rating of the user according to projects that he/she has completed'})
    rating?: number;
}
