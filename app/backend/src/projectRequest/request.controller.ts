import { Controller, Get, Post, Body } from '@nestjs/common';
import { createRequestDto } from './dto/create-request.dto';
import { requestService } from './request.service';

@Controller('request')
export class requestController {
  constructor(private readonly requestService: requestService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post()
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
