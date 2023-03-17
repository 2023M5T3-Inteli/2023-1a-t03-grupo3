import { Injectable } from '@nestjs/common';
import { CreateHomepageDto } from './dto/create-homepage.dto';

@Injectable()
export class HomepageService {
  private readonly home: CreateHomepageDto[] = [];
  async findAll(): Promise<CreateHomepageDto[]> {
    return this.home;
  }


  async findOne(id: number): Promise<CreateHomepageDto[]> {
    const project = [
      {
        name: this.home.find((x) => x.id === id)?.name,
        description: this.home.find((x) => x.id === id)?.description,
        favorite: this.home.find((x) => x.id === id).favorite
      },
    ];
    return project;
  }
}
