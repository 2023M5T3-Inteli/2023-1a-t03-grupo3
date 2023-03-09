import { Injectable } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { Ranking } from './entity/ranking.entity';
import { RankingInterface } from './interfaces/ranking.interface';

@Injectable()
export class RankingService {
  private readonly rankings: RankingInterface[] = [];
  private readonly ranked: Ranking[] = [];
  findAll(): RankingInterface[] {
    this.rankings.sort((a, b) => {
      if (a.score > b.score) {
        return -1;
      }
    });

    return this.rankings;
  }

  findOne(id: number): Ranking {
    return this.ranked[id];
  }
}
