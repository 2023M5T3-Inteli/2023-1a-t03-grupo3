import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/createProject.dto';
import { UpdateProjectDto } from './dto/updateProject.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
	constructor(private readonly projectsService: ProjectsService) { }

	@Get()
	@ApiResponse({
		status: 200,
		description: 'Everything works fine',
		type: CreateProjectDto
	})
	@ApiResponse({
		status: 403,
		description: 'Forbidden',
	})
	findAll() {
		return this.projectsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.projectsService.findOne(id);
	}

	@Get('/members/:id')
	findMembers(@Param('id') id: string) {
		return this.projectsService.findMembers(id);
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

	@Put('/update/acceptMember/:id')
	accept(@Param('id') projectId: string, @Body() body: any) {
		return this.projectsService.acceptMember(projectId, body.memberId);
	}

	@Put('/update/declineMember/:id')
	decline(@Param('id') projectId: string, @Body() body: any) {
		return this.projectsService.declineMember(projectId, body.memberId);
	}

	@Post('/apply/:id')
	apply(@Param('id') id: string, @Body() body: any) {
		return this.projectsService.applyToProject(id, body);
	}

	@Delete('/delete/:id')
	remove(@Param('id') id: string) {
		return this.projectsService.remove(id);
	}
}
