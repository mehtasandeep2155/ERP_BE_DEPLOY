import { Module } from "@nestjs/common";
import { ApiMainServiceController } from "./api-main-service.controller";
import { ApiMainServiceService } from "./api-main-service.service";
import { UserService } from "apps/user/src/user.service";
import { AuthService } from "apps/user/src/auth/auth.service";
import { PrismaService } from "shared/prisma/prisma.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: "smtp.gmail.com",
        secure: false,
        service: "gmail",
        port: 587,
        ignoreTLS: false,
        auth: {
          user: process.env.SENDERMAIL,
          pass: process.env.MAILPASS,
        },
      },
      defaults: {
        from: process.env.SENDERMAIL,
        subject: "Password Reset",
      },
    }),
    JwtModule.register({}),
  ],
  controllers: [ApiMainServiceController],
  providers: [
    ApiMainServiceService,
    UserService,
    AuthService,
    PrismaService,
    ConfigService,
  ],
})
export class ApiMainServiceModule {}
