import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<any>;
    getMyUser(params: {
        id: string;
    }): Promise<any>;
}
