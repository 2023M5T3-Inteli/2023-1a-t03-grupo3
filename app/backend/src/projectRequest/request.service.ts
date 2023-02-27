import { Injectable } from '@nestjs/common';
import { createRequestDto } from './dto/create-request.dto';

@Injectable()
export class requestService {
  create(createRequestDto: createRequestDto) {

    return 'This action creates a request to the manager';
  }

}

