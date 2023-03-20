import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) { }

  findAll() {
    const projects = this.prisma.project.findMany({});

    return projects;
  }

  create(createProjectDto: CreateProjectDto) {
    const newProject = this.prisma.project.create({
      data: {
        title: createProjectDto.title,
        description: createProjectDto.description,
        startDate: createProjectDto.startDate,
        endDate: createProjectDto.endDate,
        category: createProjectDto.category,
        status: createProjectDto.status,
        tags: [...createProjectDto.tags]
      }
    });

    return newProject;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
