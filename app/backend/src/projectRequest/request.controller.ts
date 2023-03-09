import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { createRequestDto } from './dto/create-request.dto';
import { requestService } from './request.service';

@ApiBearerAuth()
@ApiTags('project-request')
@Controller('request')
export class requestController {
  constructor(private readonly requestService: requestService) {}

  @Post()
  @ApiOperation({ summary: 'Create project' })
  create(@Body() createRequestDto: createRequestDto) {
    return this.requestService.create(createRequestDto);
  }
}

// console.log(`Project Name: ${project}, Manager: ${manager}, Name: ${name}, E-mail: ${email}`);
// return {
//   message: 'Request created and pending aproval.',
//   data: {
//     project,
//     manager,
//     name,
//     email,
//   },
// };
