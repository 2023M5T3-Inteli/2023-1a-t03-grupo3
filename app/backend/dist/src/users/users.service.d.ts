import { PrismaService } from 'prisma/prisma.service';
import { UpdateUserDto } from './dto/updateUser.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<{
        users: {
            email: string;
            id: string;
        }[];
        message: string;
    }>;
    getMyUser(id: string): Promise<{
        user: import(".prisma/client").User;
        message: string;
    }>;
    updateUser(id: string, body: UpdateUserDto): Promise<{
        user: import(".prisma/client").User;
        message: string;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        message: string;
    }>;
}
