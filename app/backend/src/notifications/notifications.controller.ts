import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationsService } from './notifications.service';

@ApiBearerAuth()
@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  // @Post('create')
  // create(@Body() createNotificationDto: CreateNotificationDto) {
  //   return this.notificationsService.create(createNotificationDto);
  // }

  @Get('/getAll/:id')
  @ApiResponse({
		status: 200,
		description: 'Everything works fine',
		type: CreateNotificationDto
	  })
	  @ApiResponse({
		status: 403,
		description: 'Forbidden',
	  })
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
