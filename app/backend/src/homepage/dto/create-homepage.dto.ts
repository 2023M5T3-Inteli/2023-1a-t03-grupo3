import { ApiProperty } from "@nestjs/swagger";

export class CreateHomepageDto {
  id?: number;

  @ApiProperty({ example: "Annie", description: "Username" })
  name: string;

  @ApiProperty({
    example: 40,
    description:
      "Rating of the user according to projects that he/she has completed",
  })
  description: string;

  @ApiProperty({
    example: true,
    description: "The projecte is favorited by the user",
  })
  favorite: boolean;
}
