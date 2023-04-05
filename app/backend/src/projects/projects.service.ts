import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProjectDto } from './dto/createProject.dto';
import { UpdateProjectDto } from './dto/updateProject.dto';

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) { }


    // Método para buscar todos os projetos
    async findAll() {
        const projects = await this.prisma.project.findMany({ orderBy: { createdAt: 'desc' } });

        return projects;
    }

    // Método para criar um novo projeto
    async create(createProjectDto: CreateProjectDto) {
        const foundProject = await this.prisma.project.findUnique({
            where: {
                title: createProjectDto.title
            }
        });

        const creator = await this.prisma.user.findUnique({
            where: {
                id: createProjectDto.userId
            }
        });

        if (foundProject) {
            throw new BadRequestException('Project already exists');
        }

        const newProject = await this.prisma.project.create({
            data: {
                ...createProjectDto,
            }
        });

        return newProject;
    }

    // Método para buscar um projeto pelo ID
    async findOne(id: string) {
        const foundProject = await this.prisma.project.findUnique({
            where: { id: id }
        });

        if (!foundProject) {
            throw new BadRequestException('Project not found');
        }

        return foundProject;
    }

    // Método para buscar membros de um projeto pelo ID
    async findMembers(id: string) {
        const foundProject = await this.prisma.project.findUnique({
            where: { id: id },
            select: {
                members: true
            }
        });

        if (!foundProject) {
            throw new BadRequestException('Project not found');
        }

        return foundProject;
    }

    // Método para adicionar um membro ao projeto pelo ID
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


    // Método para atualizar um projeto pelo ID
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


    // Método para aplicar a um projeto pelo ID
    async applyToProject(projectId: string, body: any) {
        const foundProject = await this.prisma.project.findUnique({
            where: { id: projectId }
        });

        if (!foundProject) {
            throw new BadRequestException("Project not found");
        }

        const { role, answers, userId } = body;

        if (foundProject.questions.length !== answers.length) {
            throw new BadRequestException("Invalid answers");
        }

        const user = await this.prisma.user.findUnique({
            where: { id: userId }
        });

        const newMember = await this.prisma.member.create({
            data: {
                role: role,
                questions: answers.map((answer: any) => {
                    return answer.answer;
                }),
                accepted: false,
                userId: userId,
                projectId: projectId
            }
        });

        const owner = await this.prisma.user.findUnique({
            where: { id: foundProject.userId }
        });

        // create a notification for the project owner
        await this.prisma.user.update({
            where: { id: owner.id },
            data: {
                notifications: {
                    create: {
                        description: `${user.fullName} applied to your project ${foundProject.title}`,
                        type: 'application'
                    }
                }
            }
        });

        return newMember;
    }



    async acceptMember(projectId: string, memberId: string) {
        const foundProject = await this.prisma.project.findUnique({
            where: { id: projectId }
        });

        if (!foundProject) {
            throw new BadRequestException("Project not found");
        }

        const foundMember = await this.prisma.member.findUnique({
            where: { id: memberId }
        });

        if (!foundMember) {
            throw new BadRequestException("Member not found");
        }

        await this.prisma.member.update({
            where: { id: memberId },
            data: {
                accepted: true
            }
        });

        return {
            message: 'Member accepted successfully',
            member: foundMember
        };
    }



    async declineMember(projectId: string, memberId: string) {
        const foundProject = await this.prisma.project.findUnique({
            where: { id: projectId }
        });

        if (!foundProject) {
            throw new BadRequestException("Project not found");
        }

        const foundMember = await this.prisma.member.findUnique({
            where: { id: memberId }
        });

        if (!foundMember) {
            throw new BadRequestException("Member not found");
        }

        await this.prisma.member.delete({
            where: { id: memberId }
        });

        return {
            message: 'Member declined successfully',
            member: foundMember
        };
    }


    // Método para remover um projeto por ID
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
