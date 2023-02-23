import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RankingModule } from './ranking/ranking.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [RankingModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
