import { Module } from '@nestjs/common';
import { AppController } from './request.controller';
import { AppService } from './request.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

export class createProjectRequest{
  project: string;
  manager: string;
  email: string;
  name: string;
}
