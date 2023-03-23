import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiBearerAuth, ApiResponse, ApiTags
} from '@nestjs/swagger';
import { CreateRankingDto } from './dto/create-ranking.dto';
import { RankingService } from './ranking.service';

@ApiBearerAuth()
@ApiTags('ranking')
@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

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


  @ApiResponse({
    status: 200,
    description: 'Everything works fine',
    type: CreateRankingDto
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  @Get('/user/:id')
  async findOne(@Param('id') id: string) {
    return await this.rankingService.findOne(id);
  }
}
