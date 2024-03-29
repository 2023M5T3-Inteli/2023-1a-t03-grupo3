/// <reference types="express" />
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: any): Promise<{
        message: string;
    }>;
    signin(dto: AuthDto, req: any, res: any): Promise<import("express").Response<any, Record<string, any>>>;
    signout(req: any, res: any): Promise<import("express").Response<any, Record<string, any>>>;
}
