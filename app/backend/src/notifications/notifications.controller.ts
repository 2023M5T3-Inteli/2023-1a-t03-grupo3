import { Controller, Get } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationInterface } from './interfaces/notifications.interface';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Notification } from './entity/notifications.entity';

@ApiBearerAuth()
@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  @Get()
  @ApiResponse({
    status: 200,
    description: 'This method shows the specific notification info for the user',
    type: Notification
  })
  findAll(): NotificationInterface[] {
    return this.notificationsService.findAll();
  }
}
