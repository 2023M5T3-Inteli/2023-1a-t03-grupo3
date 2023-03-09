import { ApiProperty } from '@nestjs/swagger';

export class Login {
    @ApiProperty({ example: 'amel@dell.com', description: 'email' })
    email: string;
    @ApiProperty({ example: 'xpto', description: 'password' })
    password: string;
}

