import { ApiProperty } from '@nestjs/swagger';

export class Notification {
  @ApiProperty({
    example: 'Ammel XPYX',
    description: 'name if the user is going to be accepted or denied',
  })
  name?: string;
  @ApiProperty({
    example: 'You were approved',
    description: 'It appears if the user was accepted in a project',
  })
  approved?: string;
  @ApiProperty({
    example: 'You were not approved',
    description: 'It appears if the user was not accepted in a project',
  })
  unapproved?: string;
}
