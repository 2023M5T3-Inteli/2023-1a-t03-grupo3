import { ApiProperty } from "@nestjs/swagger";

export class CreateRankingDto {
    @ApiProperty({example: 'adusufhij2m3jr', description: 'id'})
    id?: string;

    @ApiProperty({example: 'Annie', description: 'fullname'})
    fullname?: string;

    @ApiProperty({example: 40, description: 'Rating of the user according to projects that he/she has completed'})
    score?: number;

    @ApiProperty({example: 'null', description: 'picture'})
    picture?: string;
}
