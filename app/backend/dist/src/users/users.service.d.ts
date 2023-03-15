import { PrismaService } from 'prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<{
        email: string;
        id: string;
    }[]>;
    getMyUser(id: string): Promise<import(".prisma/client").User>;
}
