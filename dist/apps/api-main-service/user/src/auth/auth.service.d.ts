import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt/dist';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { AuthDto, AuthSignInDto, PasswordDto, ResetPassDto } from './dto/auth.dto';
import { MailerService } from '@nestjs-modules/mailer';
export declare class AuthService {
    private mailerService;
    private prisma;
    private jwt;
    private config;
    constructor(mailerService: MailerService, prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signToken(userId: string, email: string): Promise<{
        token: string;
    }>;
    signup(dto: AuthDto): Promise<import(".prisma/client").User>;
    signin(dto: AuthSignInDto): Promise<{
        jwt: string;
        user: import(".prisma/client").User & {
            modules: import(".prisma/client").Module[];
            company: import(".prisma/client").Company & {
                sub_company: import(".prisma/client").Sub_company[];
            };
        };
    }>;
    forgotPassword(dto: PasswordDto): Promise<string>;
    resetPassword(dto: ResetPassDto): Promise<string>;
}
