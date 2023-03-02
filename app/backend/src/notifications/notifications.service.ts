import { Injectable } from '@nestjs/common';
import { Notification } from './interfaces/notifications.interface';
@Injectable()
export class NotificationsService {
  private readonly notifications: Notification[] = [];
  findAll(): Notification[] {
    return this.notifications;
  }
}
