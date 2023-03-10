import { Module } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist';
import { LoginModule } from 'src/login/login.module';
import { ProfileModule } from 'src/profile/profile.module';
import { ProfileService } from 'src/profile/profile.service';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalStrategy } from './strategy/local.strategy';

const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

@UseGuards(JwtAuthGuard)
@Module({
  imports: [
    passportModule,
    LoginModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '300s' },
    }),
    ProfileModule
  ],
  providers: [AuthService, LocalStrategy, ProfileService],
  exports: [passportModule],
})
export class AuthModule {}
