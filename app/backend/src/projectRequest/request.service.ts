import { Injectable } from '@nestjs/common';

@Injectable()
export class requestService {
  getHello(): string {
    return 'Hello World!';
  }
}
