"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUsers() {
        const users = await this.prisma.user.findMany({
            select: { id: true, email: true }
        });
        if (!users) {
            throw new common_1.BadRequestException('No user found');
        }
        return users;
    }
    async getUser(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new common_1.BadRequestException('No user found');
        }
        return user;
    }
    async updateUser(id, body) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new common_1.BadRequestException('No user found');
        }
        console.log(body);
        if (body.hashedPassword) {
            await this.prisma.user.update({
                where: { id },
                data: Object.assign(Object.assign({}, body), { hashedPassword: await this.hashPassword(body.hashedPassword) })
            });
            return {
                message: "User updated successfully"
            };
        }
        await this.prisma.user.update({
            where: { id },
            data: Object.assign({}, body)
        });
        return {
            message: "User updated successfully"
        };
    }
    async deleteUser(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new common_1.BadRequestException('No user found');
        }
        await this.prisma.user.delete({ where: { id } });
        return { id, message: "User deleted successfully" };
    }
    async hashPassword(password) {
        return await bcrypt.hash(password, 10);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map