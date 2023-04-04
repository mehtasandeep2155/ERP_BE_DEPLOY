import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { ApiMainServiceService } from "./api-main-service.service";
import { UserService } from "apps/user/src/user.service";
import { AuthService } from "apps/user/src/auth/auth.service";
import {
  AuthDto,
  AuthSignInDto,
  PasswordDto,
  ResetPassDto,
} from "apps/user/src/auth/dto/auth.dto";
import { UserCreatedDto } from "apps/user/src/dto/userCreated.dto";

@Controller("main")
export class ApiMainServiceController {
  constructor(
    private readonly apiMainServiceService: ApiMainServiceService,
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Get()
  getHello(): object[] {
    return this.apiMainServiceService.getAll();
  }

  @Get("get-user")
  getUserApi() {
    return this.userService.getUser();
  }

  @Post("signup")
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post("signin")
  signin(@Body() dto: AuthSignInDto) {
    return this.authService.signin(dto);
  }

  @Patch("forgot-password")
  forgotPassword(@Body() dto: PasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @Patch("reset-password")
  resetPassword(@Body() dto: ResetPassDto) {
    return this.authService.resetPassword(dto);
  }

  @Patch("handle-user")
  verifyUser(@Body() dto: UserCreatedDto) {
    return this.userService.verifyUser(dto);
  }
}
