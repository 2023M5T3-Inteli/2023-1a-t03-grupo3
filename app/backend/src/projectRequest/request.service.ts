import { Injectable } from '@nestjs/common';
import { createRequestDto } from './dto/create-request.dto';
import { Request } from './entities/request.entity';

@Injectable()
export class requestService {
  private readonly requests: Request[] = [];
  create(createRequestDto: createRequestDto) {
    this.requests.push(createRequestDto)
    return createRequestDto;
  }

}

