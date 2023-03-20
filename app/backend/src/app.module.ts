import { Module } from '@nestjs/common';
import { RankingModule } from './ranking/ranking.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [RankingModule, AuthModule, UsersModule, ProjectsModule],
})
export class AppModule { }
