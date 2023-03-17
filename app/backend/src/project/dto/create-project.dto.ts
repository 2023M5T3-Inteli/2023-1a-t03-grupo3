import {
    IsArray,
    IsBoolean,
    IsDate, IsNotEmpty,
    IsNumber,
    IsString, Length
} from "class-validator";

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  public title: string;

  @IsNotEmpty()
  @IsString()
  @Length(100, 300, {
    message:
      "Description must be at least 100 characteres long, but no longer than 300.",
  })
  public description: string;

  @IsNotEmpty()
  @IsDate()
  public start_date: Date;
  
  @IsNotEmpty()
  @IsDate()
  public end_date: Date;

  @IsNotEmpty()
  @IsString()
  public subject: string;

  public attachments: [];

  @IsNumber()
  @IsNotEmpty()
  public members: number;

  @IsString()
  @IsNotEmpty()
  public role: string;

  @IsArray()
  public tag: [];

  @IsString()
  public questions: string;

  @IsBoolean()
  public shadowing: boolean;
}
