import { Injectable } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './interfaces/profile.interface';

@Injectable()
export class ProfileService {
  private readonly profiles: Profile[] = [];
  findAll(): Profile[] {
    return this.profiles;
  }
  update(id: number, updateProfileDto: UpdateProfileDto) {
    name: string;
    ocupation: string;
    email: string;
    linkedin: string;
    contact: number;
    country: string;
    state: string;
    city: string;
    hardskills: string;
    softskills: string;
    otherskills: string;
  }
}
