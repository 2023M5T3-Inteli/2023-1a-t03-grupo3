import { Injectable } from '@nestjs/common';
import { createRequestDto } from './dto/create-request.dto';
import { RequestEntity } from './entities/request.entity';

@Injectable()
export class requestService {
  private readonly requests: RequestEntity[] = [];
  create(createRequestDto: createRequestDto) {
    this.requests.push(createRequestDto)
    return createRequestDto;
  }

}

