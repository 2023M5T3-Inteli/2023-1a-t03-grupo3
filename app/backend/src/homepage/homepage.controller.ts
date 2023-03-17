import { Controller, Get, Param } from '@nestjs/common';
import { CreateHomepageDto } from './dto/create-homepage.dto';
import { HomepageService } from './homepage.service';

@Controller()
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Get()
  async findAll(): Promise<CreateHomepageDto[]> {
    return await this.homepageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.homepageService.findOne(+id);
  }
}
