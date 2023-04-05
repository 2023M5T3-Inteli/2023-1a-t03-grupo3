import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) { }

  // Método para retornar todas as notificações
  async findAll(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id
      },
      select: {
        notifications: true
      }
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user.notifications;
  }
}
