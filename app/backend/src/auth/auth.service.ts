import { Injectable } from '@nestjs/common';
import { ProfileService } from 'src/profile/profile.service';

@Injectable()
export class AuthService {
  login(user: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private profileService: ProfileService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.profileService.findOne(0);
    if (user) {
      return 'teste ok';
    }
    return false;
  }
}
