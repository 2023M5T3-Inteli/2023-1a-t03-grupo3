import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<import(".prisma/client").User[]>;
    getMyUser(params: {
        id: string;
    }): Promise<import(".prisma/client").User>;
}
