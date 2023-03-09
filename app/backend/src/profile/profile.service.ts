import { Injectable } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileInterface } from './interfaces/profile.interface';

@Injectable()
export class ProfileService {
  private readonly profiles: ProfileInterface[] = [];
  
  findOne(id: number): ProfileInterface[] {
    return this.profiles;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
  }
}
