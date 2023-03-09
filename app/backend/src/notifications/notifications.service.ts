import { Injectable } from '@nestjs/common';
import { NotificationInterface } from './interfaces/notifications.interface';
@Injectable()
export class NotificationsService {
  private readonly notifications: NotificationInterface[] = [];
  findAll(): NotificationInterface[] {
    return this.notifications;
  }
}
