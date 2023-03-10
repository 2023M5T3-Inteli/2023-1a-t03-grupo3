import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';
import { CreateLoginDto } from './dto/create-login.dto';
import { Login } from './entities/login.entity';
import { LoginService } from './login.service';

@Controller('login')
@UseGuards(AuthGuard())
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @ApiBearerAuth()
  @ApiTags('login')
  @Post()
  @ApiOperation({ summary: 'Create Login' })
  @ApiResponse({
    status: 200,
    description: 'This method posts login info',
    type: Login,
  })
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }
}
