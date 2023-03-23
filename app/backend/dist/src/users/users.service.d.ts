import { PrismaService } from 'prisma/prisma.service';
import { UpdateUserDto } from './dto/updateUser.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<{
        email: string;
        id: string;
    }[]>;
    getUser(id: string): Promise<import(".prisma/client").User>;
    updateUser(id: string, body: UpdateUserDto): Promise<{
        message: string;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        message: string;
    }>;
    hashPassword(password: string): Promise<string>;
}
