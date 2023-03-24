import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateRankingDto } from './dto/create-ranking.dto';
import { RankingService } from './ranking.service';

@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) { }

  @Get()
  async findAll() {
    return await this.rankingService.findAll();
  }

  @Post("/increment/:id")
  increment(@Param('id') id: string) {
    return this.rankingService.increment(id);
  }
}
