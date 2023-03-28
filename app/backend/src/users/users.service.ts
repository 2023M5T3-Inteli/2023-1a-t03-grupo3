import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';

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

    async getUser(id: string) {
        const user = await this.prisma.user.findUnique({ where: { id } });

        if (!user) {
            throw new BadRequestException('No user found');
        }

        return user;
    }

    async updateUser(id: string, body: any) {
        const user = await this.prisma.user.findUnique({ where: { id } });

        if (!user) {
            throw new BadRequestException('No user found');
        }

        console.log(body)

        if (body.hashedPassword) {
            await this.prisma.user.update({
                where: { id },
                data: {
                    ...body,
                    hashedPassword: await this.hashPassword(body.hashedPassword)
     
                }
            });

            return {
                message: "User updated successfully"
            };
        }

        await this.prisma.user.update({
            where: { id },
            data: {
                ...body
            }
        });

        return {
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

    async hashPassword(password: string) {
        return await bcrypt.hash(password, 10);
    }
}
