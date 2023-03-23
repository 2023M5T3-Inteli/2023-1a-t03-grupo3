import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateRankingDto } from './dto/create-ranking.dto';
import { RankingService } from './ranking.service';

@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) { }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Everything works fine',
    type: CreateRankingDto
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  async findAll() {
    return await this.rankingService.findAll();
  }

  @Post("/increment/:id")
  @ApiResponse({
    status: 200,
    description: 'Everything works fine',
    type: CreateRankingDto
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  @ApiOperation({description: 'any'})
  increment(@Param('id') id: string) {
    return this.rankingService.increment(id);
  }
}
