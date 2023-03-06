import { Controller, Get, Param } from '@nestjs/common';
import { Ranking } from './interfaces/ranking.interface';
import { RankingService } from './ranking.service';

@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Get()
  async findAll(): Promise<Ranking[]> {
    return this.rankingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Ranking[]> {
    return this.rankingService.findOne(id);
  }
}
