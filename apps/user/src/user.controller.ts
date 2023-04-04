import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from './auth/guard';
import { UserCreatedDto } from './dto/userCreated.dto';
import { RoleGuard } from '../../shared/roleGuard/role/role.guard';
import { Roles } from '../../shared/roleGuard/roles/roles.decorator';
import {
  AuthDto,
  AuthSignInDto,
  PasswordDto,
  ResetPassDto,
} from './auth/dto/auth.dto';
import { AuthService } from './auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  // @Roles('Admin')
  @UseGuards(JwtGuard)
  @Get('get-user')
  getUserApi() {
    return this.userService.getUser();
  }

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthSignInDto) {
    return this.authService.signin(dto);
  }

  @Patch('forgot-password')
  forgotPassword(@Body() dto: PasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @Patch('reset-password')
  resetPassword(@Body() dto: ResetPassDto) {
    return this.authService.resetPassword(dto);
  }

  @Patch('handle-user')
  verifyUser(@Body() dto: UserCreatedDto) {
    return this.userService.verifyUser(dto);
  }
  // microservices

  // @EventPattern('user_created')
  // handleUserCreated(data: UserCreatedDto) {
  //   this.userService.verifyUser(data);
  // }

  // @MessagePattern({ cmd: 'get_user' })
  // getUser() {
  //   return this.userService.getUser();
  // }
}
