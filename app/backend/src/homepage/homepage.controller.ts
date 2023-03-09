import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Homepage } from './entity/homepage.entity';
import { HomepageService } from './homepage.service';

@ApiBearerAuth()
@ApiTags('homepage')
@Controller()
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'This method get all projects from DB',
    type: Homepage
  })
  findAll(): Homepage[] {
    return this.homepageService.findAll();
  }
}
