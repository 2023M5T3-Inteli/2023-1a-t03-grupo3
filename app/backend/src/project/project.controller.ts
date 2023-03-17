import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectService } from './project.service';
import { MailService } from '../mail/mail.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService, private readonly mailService: MailService) {}

  @Post()
  create(@Body() project: CreateProjectDto) {
    return this.projectService.create(project);
  }
}
