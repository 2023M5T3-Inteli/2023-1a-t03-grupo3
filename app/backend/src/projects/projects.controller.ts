import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/createProject.dto';
import { UpdateProjectDto } from './dto/updateProject.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
	constructor(private readonly projectsService: ProjectsService) { }

	@Get()
	findAll() {
		return this.projectsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.projectsService.findOne(id);
	}

	@Post("/create")
	create(@Body() data: CreateProjectDto) {
		return this.projectsService.create(data);
	}

	@Put('/update/addMember/:id')
	addMember(@Param('id') id: string, @Body() memberId: string) {
		return this.projectsService.addMember(id, memberId);
	}

	@Put('/update/:id')
	update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
		return this.projectsService.update(id, updateProjectDto);
	}

	@Delete('/delete/:id')
	remove(@Param('id') id: string) {
		return this.projectsService.remove(id);
	}
}
