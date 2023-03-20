import { Module } from '@nestjs/common';
import { RankingModule } from './ranking/ranking.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [RankingModule, AuthModule, UsersModule],
})
export class AppModule { }
