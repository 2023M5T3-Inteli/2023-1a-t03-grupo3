import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async getUsers() {
        const users = await this.prisma.user.findMany({
            select: { id: true, email: true }
        });

        if (!users) {
            throw new BadRequestException('No user found');
        }

        return users;

    }

    async getMyUser(id: string) {
        const user = await this.prisma.user.findUnique({ where: { id } });

        if (!user) {
            throw new BadRequestException('No user found');
        }

        return {
            user,
            message: "User found successfully"
        };
    }

    async updateUser(id: string, body: UpdateUserDto) {
        const user = await this.prisma.user.findUnique({ where: { id } });

        if (!user) {
            throw new BadRequestException('No user found');
        }

        await this.prisma.user.update({
            where: { id },
            data: {
                ...body
            }
        });

        return {
            user,
            message: "User updated successfully"
        };
    }

    async deleteUser(id: string) {
        const user = await this.prisma.user.findUnique({ where: { id } });

        if (!user) {
            throw new BadRequestException('No user found');
        }

        await this.prisma.user.delete({ where: { id } });

        return { id, message: "User deleted successfully" };
    }
}
