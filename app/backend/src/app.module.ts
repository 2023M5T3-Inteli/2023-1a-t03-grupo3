import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RankingModule } from './ranking/ranking.module';
import { LoginModule } from './login/login.module';
import { HomepageModule } from './homepage/homepage.module';

@Module({
  imports: [RankingModule, LoginModule, HomepageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
