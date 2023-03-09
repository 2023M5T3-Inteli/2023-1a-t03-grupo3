import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLoginDto } from './dto/create-login.dto';
import { Login } from './entities/login.entity';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @ApiBearerAuth()
  @ApiTags('login')
  @Post()
  @ApiOperation({ summary: 'Create Login' })
  @ApiResponse({
    status: 200,
    description: 'This method posts login info',
    type: Login
  })
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }
}
