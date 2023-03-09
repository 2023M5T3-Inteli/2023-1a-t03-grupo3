import { Module } from '@nestjs/common';
import { requestController } from './request.controller';
import { requestService } from './request.service';

@Module({
  controllers: [requestController],
  providers: [requestService],
})
export class RequestModule {}

// export class createProjectRequest{
//   project: string;
//   manager: string;
//   email: string;
//   name: string;
// }
