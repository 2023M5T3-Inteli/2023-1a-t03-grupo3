import { Injectable } from '@nestjs/common';
import { send } from 'process';
import { Ranking } from './interfaces/ranking.interface';

@Injectable()
export class RankingService {
  private readonly rankings: Ranking[] = [];
  findAll(): Ranking[] {
      this.rankings.sort((a, b) => {
        if(a.score > b.score) {
          return -1;
        }
      })
  
      return this.rankings;
  }

  // getUserRanking(): any{
  //   let userRanking = {
  //     name: "Marcos",
  //     score: 22
  //   }
  //   return userRanking
  // }
  
}
