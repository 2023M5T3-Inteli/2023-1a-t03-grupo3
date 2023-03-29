import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProjectDto } from './dto/createProject.dto';
import { UpdateProjectDto } from './dto/updateProject.dto';

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        const projects = await this.prisma.project.findMany({});

        return projects;
    }

    async create(createProjectDto: CreateProjectDto) {
        const foundProject = await this.prisma.project.findUnique({
            where: {
                title: createProjectDto.title
            }
        });

        if (foundProject) {
            throw new BadRequestException('Project already exists');
        }

        const newProject = await this.prisma.project.create({
            data: {
                ...createProjectDto
            }
        });

        return newProject;
    }

    async findOne(id: string) {
        const foundProject = await this.prisma.project.findUnique({
            where: { id: id }
        });

        if (!foundProject) {
            throw new BadRequestException('Project not found');
        }

        return foundProject;
    }

    async addMember(id: string, memberId: string) {
        const foundProject = await this.prisma.project.findUnique({
            where: { id: id }
        });

        if (!foundProject) {
            throw new BadRequestException('Project not found');
        }

        const foundMember = await this.prisma.user.findUnique({
            where: { id: memberId }
        });

        if (!foundMember) {
            throw new BadRequestException('Member not found');
        }

        await this.prisma.project.update({
            where: { id: id },
            data: {
                members: {
                    connect: {
                        id: memberId
                    }
                }
            }
        });

        return {
            message: 'Member added successfully',
        };
    }


    async update(id: string, updateProjectDto: UpdateProjectDto) {
        const foundProject = await this.prisma.project.findUnique({
            where: { id: id }
        });

        if (!foundProject) {
            throw new BadRequestException('Project not found');
        }

        await this.prisma.project.update({
            where: { id: id },
            data: {
                ...updateProjectDto
            }
        });

        return {
            message: 'Project updated successfully',
        };
    }

    async applyToProject(projectId: string, userId: string) {
        const foundProject = await this.prisma.project.findUnique({
            where: { id: projectId }
        });

        if (!foundProject) {
            throw new BadRequestException("Project not found");
        }

        return foundProject
    }

    async remove(id: string) {
        const foundProject = await this.prisma.project.findUnique({
            where: { id: id }
        });

        if (!foundProject) {
            throw new BadRequestException('Project not found');
        }

        await this.prisma.project.delete({
            where: { id: id }
        });

        return {
            message: 'Project deleted successfully',
        };
    }
}
