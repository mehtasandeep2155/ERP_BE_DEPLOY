import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../../shared/prisma/prisma.module';
import { ModuleModule } from '../../module/src/module.module';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule =
      await Test.createTestingModule({
        imports: [
          ModuleModule,
          PrismaModule,
          AuthModule,
          MailerModule.forRoot({
            transport: {
              host: 'smtp.gmail.com',
              secure: false,
              service: 'gmail',
              port: 587,
              ignoreTLS: false,
              auth: {
                user: process.env.SENDERMAIL,
                pass: process.env.MAILPASS,
              },
            },
            defaults: {
              from: process.env.SENDERMAIL,
              subject: 'Password Reset',
            },
          }),
        ],
        controllers: [UserController],
        providers: [
          {
            provide: UserService,
            useValue: {
              getUserApi: jest.fn((x) => x),
              signup: jest.fn((x) => x),
              signin: jest.fn((x) => x),
              forgotPassword: jest.fn((x) => x),
              resetPassword: jest.fn((x) => x),
              verifyUser: jest.fn((x) => x),
            },
          },
          AuthService,
          JwtService,
          ConfigService,
        ],
      }).compile();

    controller = module.get<UserController>(
      UserController,
    );

    userService =
      module.get<UserService>(UserService);
  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('service should be defined', () => {
    expect(userService).toBeDefined();
  });
});
