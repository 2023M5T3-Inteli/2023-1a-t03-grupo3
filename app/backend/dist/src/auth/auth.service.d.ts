import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto, AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    signup(dto: CreateUserDto): Promise<{
        message: string;
    }>;
    signin(dto: AuthDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    signout(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hashedPassword: string): Promise<boolean>;
    signToken(id: string, email: string): Promise<string>;
}
