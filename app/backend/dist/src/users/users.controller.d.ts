import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<{
        email: string;
        id: string;
    }[]>;
    getMyUser(params: {
        id: string;
    }): Promise<import(".prisma/client").User>;
}
