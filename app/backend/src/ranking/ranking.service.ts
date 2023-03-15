import { Injectable } from '@nestjs/common';
import { CreateRankingDto } from './dto/create-ranking.dto';

@Injectable()
export class RankingService {
  private readonly rankings: CreateRankingDto[] = [];
  async findAll(): Promise<CreateRankingDto[]> {
    const users = [{ username: 'Andy', rating: 20 }];
    users.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    return this.rankings;
  }

  async findOne(id: number): Promise<CreateRankingDto[]> {
    const user = [
      {
        username: this.rankings.find((x) => x.id === id)?.username,
        rating: this.rankings.find((x) => x.id === id)?.rating,
      },
    ];
    return user;
  }
}
