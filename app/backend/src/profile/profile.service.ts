import { Injectable } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './interfaces/profile.interface';

@Injectable()
export class ProfileService {
  private readonly profiles: Profile[] = [];
  
  findOne(id: number): Profile[] {
    return this.profiles;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {

  }
}
