import { Module } from '@nestjs/common';
import { AuthModuleOptions } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { HomepageModule } from './homepage/homepage.module';
import { LoginModule } from './login/login.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ProfileModule } from './profile/profile.module';
import { requestModule } from './projectRequest/request.module';
import { RankingModule } from './ranking/ranking.module';

@Module({
  imports: [RankingModule, NotificationsModule, LoginModule, HomepageModule, ProfileModule, AuthModule, requestModule]
})
export class AppModule {}
