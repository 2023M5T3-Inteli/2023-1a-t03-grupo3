import { Module } from '@nestjs/common';
import { HomepageModule } from './homepage/homepage.module';
import { LoginModule } from './login/login.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ProfileModule } from './profile/profile.module';
import { RankingModule } from './ranking/ranking.module';

@Module({
  imports: [RankingModule, NotificationsModule, LoginModule, HomepageModule, ProfileModule]
})
export class AppModule {}
