import {
	BadRequestException,
	ForbiddenException,
	Injectable,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto, AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from 'src/utils/constants'
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService, private jwt: JwtService) { }

	async signup(dto: CreateUserDto) {
		const { fullName, email, password } = dto;

		const foundUser = await this.prisma.user.findUnique({ where: { email } })

		if (foundUser) {
			throw new BadRequestException('Email already exists');
		}

		const hashedPassword = await this.hashPassword(password);

		await this.prisma.user.create({
			data: {
				fullName,
				email,
				hashedPassword,
			},
		});

		return { message: 'Signup successful' };
	}

	async signin(dto: AuthDto, req: Request, res: Response) {
		const { email, password } = dto;

		const foundUser = await this.prisma.user.findUnique({ where: { email } });

		if (!foundUser) {
			throw new BadRequestException('Invalid credentials');
		}

		const isMatch = await this.comparePassword(password, foundUser.hashedPassword);

		if (!isMatch) {
			throw new BadRequestException('Invalid credentials');
		}

		// sign JWT and return it
		const token = await this.signToken(foundUser.id, foundUser.email);

		if (!token) {
			throw new ForbiddenException('Error signing token');
		}

		res.cookie('token', token);
		return res.send({ message: 'Signin successful' })
	}

	async signout(req: Request, res: Response) {
		res.clearCookie('token');
		return res.send({ message: 'Signout successful' });
	}

	async hashPassword(password: string) {
		return await bcrypt.hash(password, 10);
	}

	async comparePassword(password: string, hashedPassword: string) {
		return await bcrypt.compare(password, hashedPassword);
	}

	async signToken(id: string, email: string) {
		return this.jwt.signAsync({ id, email }, { secret: jwtSecret })
	}
}
