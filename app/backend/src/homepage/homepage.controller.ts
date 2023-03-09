import { Controller, Get } from '@nestjs/common';
import { HomepageService } from './homepage.service';

@Controller()
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Get()
  findAll():any {
    return this.homepageService.findAll();
  }
}
