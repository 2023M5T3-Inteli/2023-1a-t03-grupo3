import { Injectable } from '@nestjs/common';
import { Homepage } from './entity/homepage.entity';

@Injectable()
export class HomepageService {
  private readonly projects: Homepage[];
  findAll(): Homepage[] {
    return this.projects;
  }
}
