import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationsService {
    constructor(private prisma: PrismaService) { }

    async getNots(id: string) {
        const notifications = await this.prisma.user.findMany({
        //   where: {
        //   senderId: id
        // }
      });

        if (!notifications) {
            throw new BadRequestException('No user found');
        }

        return notifications;
    }

    // async getMyUs(id: string) {
    //     const user = await this.prisma.user.findUnique({ where: { id } });

    //     if (!user) {
    //         throw new BadRequestException('No user found');
    //     }

    //     return {
    //         user,
    //         message: "User found successfully"
    //     };
    // }

    // async updateUser(id: string, body: UpdateNotificationDto) {
    //     const user = await this.prisma.notifications.findUnique({ where: { id } });

    //     if (!Notification) {
    //         throw new BadRequestException('No notification found');
    //     }

    //     await this.prisma.notification.update({
    //         where: { id },
    //         data: {
    //             ...body
    //         }
    //     });

    //     return {
    //         Notification,
    //         message: "notification updated successfully"
    //     };
    // }

    // async deleteNots(id: string) {
    //     const user = await this.prisma.notification.findUnique({ where: { id } });

    //     if (!user) {
    //         throw new BadRequestException('No notification found');
    //     }

    //     await this.prisma.user.delete({ where: { id } });

    //     return { id, message: "nots deleted successfully" };
    // }
}
