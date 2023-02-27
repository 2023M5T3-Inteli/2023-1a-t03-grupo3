import { Controller, Get } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification } from './interfaces/notifications.interface';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  @Get()
  findAll(): Notification[] {
    return this.notificationsService.findAll();
  }
}
