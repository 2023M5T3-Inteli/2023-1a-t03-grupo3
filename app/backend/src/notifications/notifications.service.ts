import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  private readonly notifications: Notification[] = [];
  findAll(): Notification[] {
    return this.notifications;
  }
}
