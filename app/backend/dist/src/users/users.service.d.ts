import { PrismaService } from 'prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<{
        email: string;
        id: string;
    }[]>;
    getUser(id: string): Promise<import(".prisma/client").User>;
    updateUser(id: string, body: any): Promise<{
        message: string;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        message: string;
    }>;
    hashPassword(password: string): Promise<string>;
}
