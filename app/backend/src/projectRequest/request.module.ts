import { Module } from '@nestjs/common';
import { requestController } from './request.controller';
import { requestService } from './request.service';

@Module({
  imports: [],
  controllers: [requestController],
  providers: [requestService],
})
export class requestModule {}

// export class createProjectRequest{
//   project: string;
//   manager: string;
//   email: string;
//   name: string;
// }
