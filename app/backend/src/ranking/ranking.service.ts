import { Injectable } from '@nestjs/common';
import { Ranking } from './interfaces/ranking.interface';

@Injectable()
export class RankingService {
  private readonly rankings: Ranking[] = [];
  findAll(): Ranking[] {
    this.rankings.sort((a, b) => {
      if (a.score > b.score) {
        return -1;
      }
    });

    return this.rankings;
  }

  findOne(id: number): Ranking[] {
    const person = this.rankings[id];
    const rankedUser = [{ name: person.name, score: person.score }];
    return rankedUser;
  }
}
