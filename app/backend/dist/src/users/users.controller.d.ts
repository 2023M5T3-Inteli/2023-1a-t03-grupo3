import { UpdateUserDto } from './dto/updateUser.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<{
        id: string;
        email: string;
    }[]>;
    getMyUser(params: {
        id: string;
    }): Promise<{
        user: import(".prisma/client").User;
        message: string;
    }>;
    updateUser(dto: UpdateUserDto, params: {
        id: string;
    }): Promise<{
        user: import(".prisma/client").User;
        message: string;
    }>;
    deleteUser(params: {
        id: string;
    }): Promise<{
        id: string;
        message: string;
    }>;
}
