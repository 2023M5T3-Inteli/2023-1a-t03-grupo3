import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UsersService } from './users.service';


// Decoradores para autenticação e documentação da API
@ApiBearerAuth()
@ApiTags('users')
@Controller('users')

// Injeta a instância de 'UsersService' no construtor
export class UsersController {
	constructor(private readonly usersService: UsersService) { }

// Rota GET para obter todos os usuários
	@Get()
	@ApiResponse({
		status: 200,
		description: 'Everything works fine',
		type: CreateUserDto
	  })
	  @ApiResponse({
		status: 403,
		description: 'Forbidden',
	  })
	getUsers() {
		return this.usersService.getUsers();
	}

 // Rota GET para obter um usuário específico pelo ID
	@Get("/:id")
	getMyUser(@Param() params: { id: string }) {
		return this.usersService.getUser(params.id);
	}

// Rota PUT para atualizar um usuário específico pelo ID 
	// @UseGuards(JwtAuthGuard)
	@Put("/update/:id")
	updateUser(@Body() dto: any, @Param() params: { id: string }) {
		return this.usersService.updateUser(params.id, dto);
	}

 // Rota DELETE para remover um usuário específico pelo ID
	// @UseGuards(JwtAuthGuard)
	@Delete("/delete/:id")
	deleteUser(@Param() params: { id: string }) {
		return this.usersService.deleteUser(params.id);
	}
}
