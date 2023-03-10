import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation, ApiResponse,
  ApiTags
} from '@nestjs/swagger';
import { createRequestDto } from './dto/create-request.dto';
import { RequestEntity } from './entities/request.entity';
import { requestService } from './request.service';

@ApiBearerAuth('defaultBearerAuth')
@ApiTags('project-request')
@Controller('request')
export class requestController {
  constructor(private readonly requestService: requestService) {}

  @Post()
  @ApiOperation({ summary: 'Create project' })
  @ApiResponse({
    status: 201,
    description: 'This method login info',
    type: RequestEntity
  })
  create(@Body() createRequestDto: createRequestDto) {
    return this.requestService.create(createRequestDto);
  }
}
