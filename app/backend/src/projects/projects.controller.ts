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

	// Método para buscar todos os projetos
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

	// Método para buscar um projeto pelo ID
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.projectsService.findOne(id);
	}

	// Método para criar um novo projeto
	@Get('/members/:id')
	findMembers(@Param('id') id: string) {
		return this.projectsService.findMembers(id);
	}

	// Método para buscar projetos de um usuário pelo ID
	@Post("/create")
	create(@Body() data: CreateProjectDto) {
		return this.projectsService.create(data);
	}

	// Método para adicionar membros de um projeto pelo ID
	@Put('/update/addMember/:id')
	addMember(@Param('id') id: string, @Body() memberId: string) {
		return this.projectsService.addMember(id, memberId);
	}

	// Método para atualiza projeto por ID
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

	// Método para aplicar a um projeto pelo ID
	@Post('/apply/:id')
	apply(@Param('id') id: string, @Body() body: any) {
		return this.projectsService.applyToProject(id, body);
	}

	// Método para remover um projeto pelo ID
	@Delete('/delete/:id')
	remove(@Param('id') id: string) {
		return this.projectsService.remove(id);
	}
}
