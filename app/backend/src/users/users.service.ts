import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
     // Injeta a instância de 'PrismaService' no construtor
    constructor(private prisma: PrismaService) { }

    // Método para obter todos os usuários
    async getUsers() {
        const users = await this.prisma.user.findMany({
            select: { id: true, email: true }
        });

        if (!users) {
            throw new BadRequestException('No user found');
        }

        return users;
    }

// Método para obter um usuário específico pelo ID
    async getUser(id: string) {
        const user = await this.prisma.user.findUnique({ where: { id } });

        if (!user) {
            throw new BadRequestException('No user found');
        }

        return user;
    }

 // Método para atualizar um usuário específico pelo ID
    async updateUser(id: string, body: any) {
        const user = await this.prisma.user.findUnique({ where: { id } });

        if (!user) {
            throw new BadRequestException('No user found');
        }

        console.log(body)
        // if (Object.keys(body).length === 0) {
        //     throw new BadRequestException('No data to update');
        // }

        // Se houver senha, criptografa antes de atualizar
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

         // Atualiza o usuário sem alterar a senha
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

    // Método para deletar um usuário específico pelo ID
    async deleteUser(id: string) {
        const user = await this.prisma.user.findUnique({ where: { id } });

        if (!user) {
            throw new BadRequestException('No user found');
        }

        await this.prisma.user.delete({ where: { id } });

        return { id, message: "User deleted successfully" };
    }

    // Método para criptografar senhas com 'bcrypt'
    async hashPassword(password: string) {
        return await bcrypt.hash(password, 10);
    }
}
