import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRankingDto } from './dto/create-ranking.dto';
import { RankingService } from './ranking.service';

// Definindo o decorador ApiTags e o controlador para a rota 'ranking'
@ApiTags('ranking')
@ApiBearerAuth()
@Controller('ranking')

  // Injetando o serviço RankingService no construtor
export class RankingController {
  constructor(private readonly rankingService: RankingService) { }

  // Definindo a rota GET para obter todos os rankings
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

  // Definindo a rota POST para incrementar o ranking do usuário pelo ID
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
