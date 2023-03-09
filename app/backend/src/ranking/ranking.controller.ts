import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Ranking } from './entity/ranking.entity';
import { RankingInterface } from './interfaces/ranking.interface';
import { RankingService } from './ranking.service';


@ApiBearerAuth()
@ApiTags('ranking')
@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'This method get and ranks all users from DB'
  })
  findAll(): RankingInterface[] {
    return this.rankingService.findAll();
  }


  
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Select a specific id',
    type: Ranking
  })
  findOne(@Param('id') id: number): Ranking {
    return this.rankingService.findOne(+id);
  }
}
