import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedException extends HttpException {
  constructor() {
    super('jnsunsfi', HttpStatus.UNAUTHORIZED);
  }
}