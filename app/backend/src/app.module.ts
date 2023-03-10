import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { HomepageModule } from './homepage/homepage.module';
import { LoginModule } from './login/login.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ProfileModule } from './profile/profile.module';
import { RequestModule } from './projectRequest/request.module';
import { RankingModule } from './ranking/ranking.module';


@Module({
  imports: [RankingModule, NotificationsModule, LoginModule, HomepageModule, ProfileModule, RequestModule, AuthModule]
})
export class AppModule {}
