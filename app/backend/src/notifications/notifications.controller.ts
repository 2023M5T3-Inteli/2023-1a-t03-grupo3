// Importar dependências necessárias
import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationsService } from './notifications.service';

// Adicionar autenticação e definição de tags para o Swagger
@ApiBearerAuth()
@ApiTags('notifications')
@Controller('notifications')


export class NotificationsController {
// Injetar o serviço de notificações

  constructor(private readonly notificationsService: NotificationsService) {}

// @Post('create')
  // create(@Body() createNotificationDto: CreateNotificationDto) {
  //   return this.notificationsService.create(createNotificationDto);
  // }

// Método para buscar todas as notificações de um usuário
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
    // return this.notificationsService.getNots(id);
    return "Notifications";
  }
  

// Outros métodos comentados que podem ser usados futuramente
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
