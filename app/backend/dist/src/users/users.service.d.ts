import { PrismaService } from 'prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<import(".prisma/client").User[]>;
    getMyUser(id: string): Promise<import(".prisma/client").User>;
}
