import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  // @Post('create')
  // create(@Body() createNotificationDto: CreateNotificationDto) {
  //   return this.notificationsService.create(createNotificationDto);
  // }

  @Get('/getAll/:id')
  findAll(@Param("id") id: string) {
    return this.notificationsService.getNots(id);
  }
  
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.notificationsService.findAll();
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
  //   return this.notificationsService.update(id, updateNotificationDto);
  // }

  // @Delete(':id')
  // delete(@Param('id') id: string) {
  //   return this.notificationsService.delete(+id);
  // }
}
