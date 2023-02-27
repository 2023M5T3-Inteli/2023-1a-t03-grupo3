import { Controller, Get } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications-page')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  @Get()
  findAll() {
    return this.notificationsService.findAll();
  }
}
