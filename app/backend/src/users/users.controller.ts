import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) { }

	@Get()
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
