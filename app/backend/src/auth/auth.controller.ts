import { Body, Controller, Get, Post, Request, Response } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  
  signup(@Body() dto: any) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto, @Request() req, @Response() res) {
    return this.authService.signin(dto, req, res);
  }

  @Get('signout')
  @ApiResponse({
		status: 200,
		description: 'Everything works fine',
		type: AuthDto
	  })
	  @ApiResponse({
		status: 403,
		description: 'Forbidden',
	  })
  signout(@Request() req, @Response() res) {
    return this.authService.signout(req, res);
  }
}