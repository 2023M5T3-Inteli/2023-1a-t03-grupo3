import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { CreateHomepageDto } from './dto/create-homepage.dto';
import { UpdateHomepageDto } from './dto/update-homepage.dto';

@Controller('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Get('home')
  findAll():any {
    return this.homepageService.findAll();
  }
}
