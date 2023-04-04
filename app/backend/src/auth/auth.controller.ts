import { Body, Controller, Get, Post, Request, Response } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

// @ApiBearerAuth() - define que o endpoint requer um token de autenticação
@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

// @Post('signup') - define que o endpoint aceita requisições do tipo POST
  @Post('signup')
  
  signup(@Body() dto: any) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto, @Request() req, @Response() res) {
    return this.authService.signin(dto, req, res);
  }
// @Get('signout') - define que o endpoint aceita requisições do tipo GET
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
// @Request() req, @Response() res - define que o endpoint aceita requisições do tipo GET
  signout(@Request() req, @Response() res) {
    return this.authService.signout(req, res);
  }
}