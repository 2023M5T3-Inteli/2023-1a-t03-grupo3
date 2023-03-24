
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateProjectDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: 'Project', description: 'title'})
    public title: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: 'string', description: 'description'})
    public description: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: 'string', description: 'startDate'})
    public startDate: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: 'string', description: 'endDate'})
    public endDate: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: 'string', description: 'category'})
    public category: string;

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({example: 'questions', description: 'questions'})
    public questions: string[];

    @IsNotEmpty()
    @IsArray()
    @ApiProperty({example: 'tags', description: 'tags'})
    public tags: string[];
}