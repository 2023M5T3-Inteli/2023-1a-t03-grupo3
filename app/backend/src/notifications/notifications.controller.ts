import { Controller, Body, Get, Patch, Put, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification } from './interfaces/notifications.interface';
import { updateNotificationDto } from './dto/update-notification.dto';
import { createNotificationDto } from './dto/create-notification.dto';


@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  
  @Get()
  findAll(): Notification[] {
    return this.notificationsService.findAll();
  }

  @Put()
  update(@Body() updateNotificationDto: updateNotificationDto){
    return this.notificationsService.update(updateNotificationDto);
  }

  @Delete()
  delete(@Body() content: any){
    return this.notificationsService.delete(content.id);
  }

}
