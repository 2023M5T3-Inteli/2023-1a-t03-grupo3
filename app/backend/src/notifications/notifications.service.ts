import { Injectable } from '@nestjs/common';
import { Notification } from './interfaces/notifications.interface';
import { createNotificationDto } from './dto/create-notification.dto';
import { updateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationsService {
  private readonly notifications: Notification[] = [];
  
  create(createNotificationDto: createNotificationDto) {
    const newNotification: Notification = {
      id:createNotificationDto.id,
      sender: createNotificationDto.sender,
      description: createNotificationDto.description,
      type:createNotificationDto.type,
      aproved:createNotificationDto.aproved,
      receiver:createNotificationDto.receiver,

    }
    this.notifications.push(newNotification)
    return 'Notification created';
  }

  update(updateNotificationDto: updateNotificationDto){
    const notificationToUpdate = this.notifications.find(Notification=> Notification.id === updateNotificationDto.id);
    const notificationToUpdateIndex = this.notifications.indexOf(notificationToUpdate);
    
    const updatedNotification: Notification = {
      id: this.notifications[notificationToUpdateIndex].id,
      sender: this.notifications[notificationToUpdateIndex].sender,
      description: this.notifications[notificationToUpdateIndex].description,
      type:this.notifications[notificationToUpdateIndex].type,
      aproved:updateNotificationDto.aproved,
      receiver:this.notifications[notificationToUpdateIndex].receiver,
    }

    this.notifications[notificationToUpdateIndex] = updatedNotification;

    return this.notifications[notificationToUpdateIndex];
  }

  findAll(): Notification[] {
    return this.notifications;
  }

  delete(id: number): String{
    const notificationToDelete = this.notifications.find(Notification=> Notification.id === id);
    const notificationToDeleteIndex = this.notifications.indexOf(notificationToDelete);

    delete this.notifications[notificationToDeleteIndex];

    return "Object deleted";
  }
}
