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
    }): Promise<import(".prisma/client").User>;
    updateUser(dto: UpdateUserDto, params: {
        id: string;
    }): Promise<{
        message: string;
    }>;
    deleteUser(params: {
        id: string;
    }): Promise<{
        id: string;
        message: string;
    }>;
}
