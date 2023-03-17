import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { PrismaService } from "prisma/prisma.service";
import { MailService } from "src/mail/mail.service";

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService, private mailService: MailService) {}
  async create(project: CreateProjectDto) {
    const { title } = project;

    const foundProject = await this.prisma.project.findUnique({
      where: { title },
    });

    if (foundProject) {
      throw new BadRequestException("Project already exists");
    }

    const emailConfirmation = await this.mailService.sendMail()
    
    if(!emailConfirmation) {
      throw console.error("Project was not received");
    }
    
    return { message: "Project accepted" };
  }
}
