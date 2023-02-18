import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RankingModule } from './ranking/ranking.module';

@Module({
  imports: [RankingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
