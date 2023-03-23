import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class RankingService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    const foundUsers = await this.prisma.user.findMany({
      take: 20,
      orderBy: {
        score: "desc",
      },
      select:{
        picture: true,
        fullName: true,
        score: true
      }
    });
    return foundUsers;
  }

  async findOne(id: string) {
    const especificUser = await this.prisma.user.findMany({ where: { id } });
    return especificUser;
  }
}
