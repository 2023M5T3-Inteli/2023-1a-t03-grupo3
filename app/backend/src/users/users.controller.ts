import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UsersService } from './users.service';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) { }

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

	@Get("/:id")
	getMyUser(@Param() params: { id: string }) {
		return this.usersService.getUser(params.id);
	}

	// @UseGuards(JwtAuthGuard)
	@Put("/update/:id")
	updateUser(@Body() dto: UpdateUserDto, @Param() params: { id: string }) {
		return this.usersService.updateUser(params.id, dto);
	}

	// @UseGuards(JwtAuthGuard)
	@Delete("/delete/:id")
	deleteUser(@Param() params: { id: string }) {
		return this.usersService.deleteUser(params.id);
	}
}
