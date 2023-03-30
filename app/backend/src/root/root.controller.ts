import { Controller, Get } from '@nestjs/common';
import { RootService } from './root.service';

@Controller('root')
export class RootController {
  constructor(private readonly rootService: RootService) {}

  @Get("/")
  health() {
	  return "pong"
  }
}
