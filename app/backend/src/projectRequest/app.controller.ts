import { Controller, Get, Post, Body } from '@nestjs/common';
import { createProjectRequest } from './app.module';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createRequest(@Body() createProjectRequest: createProjectRequest) {
    const { project, manager, name, email} = createProjectRequest;

    // Salva os dados.
    console.log(`Project Name: ${project}, Manager: ${manager}, Name: ${name}, E-mail: ${email}`);

    return {
      message: 'Project created and pending aproval.',
      data: {
        project,
        manager,
        name,
        email,
      },
    };
  }
}
