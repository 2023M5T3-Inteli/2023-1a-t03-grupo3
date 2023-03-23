import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RankingModule } from './ranking/ranking.module';

@Module({
  imports: [RankingModule, AuthModule, UsersModule, ProjectsModule, NotificationsModule],
})
export class AppModule { }
