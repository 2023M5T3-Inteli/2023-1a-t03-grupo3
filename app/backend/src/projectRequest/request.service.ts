import { Injectable } from '@nestjs/common';
import { createRequestDto } from './dto/create-request.dto';
import { updateProjectDto } from './dto/update-project.dto';
import { Project } from './interfaces/project.interface';

@Injectable()
export class requestService {
  private readonly projects: Project[] = [];
  private actualId: number = 0;
  
  create(createRequestDto: createRequestDto) {
    const newProject: Project = {
      id: this.actualId,
      title: createRequestDto.title,
      description: createRequestDto.description,
      owner: createRequestDto.owner,
      start: createRequestDto.start,
      end: createRequestDto.end,
      theme: createRequestDto.theme,
      status: createRequestDto.status,
      tags: createRequestDto.tags,
      att: createRequestDto.att
    }

    this.actualId += 1;

    this.projects.push(newProject)
    return 'Project created';
  }

  update(updateProjectDto: updateProjectDto){
    const projectToUpdate = this.projects.find(project => project.id === updateProjectDto.id);
    const projectToUpdateIndex = this.projects.indexOf(projectToUpdate);
    
    const updatedProject: Project = {
      id: this.projects[projectToUpdateIndex].id,
      title: updateProjectDto.title,
      description: updateProjectDto.description,
      owner: this.projects[projectToUpdateIndex].owner,
      start: updateProjectDto.start,
      end: updateProjectDto.end,
      theme: updateProjectDto.theme,
      status: updateProjectDto.status,
      tags: updateProjectDto.tags,
      att: updateProjectDto.att
    }

    this.projects[projectToUpdateIndex] = updatedProject;

    return this.projects[projectToUpdateIndex];
  }

}

