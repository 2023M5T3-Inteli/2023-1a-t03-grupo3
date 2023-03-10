import { ApiProperty } from "@nestjs/swagger";

export class createRequestDto {
  @ApiProperty()
  project: string;

  @ApiProperty()
  manager: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;
}
