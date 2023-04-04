import { ApiMainServiceService } from "./api-main-service.service";
import { UserService } from "apps/user/src/user.service";
import { AuthService } from "apps/user/src/auth/auth.service";
import { AuthDto, AuthSignInDto, PasswordDto, ResetPassDto } from "apps/user/src/auth/dto/auth.dto";
import { UserCreatedDto } from "apps/user/src/dto/userCreated.dto";
export declare class ApiMainServiceController {
    private readonly apiMainServiceService;
    private readonly userService;
    private readonly authService;
    constructor(apiMainServiceService: ApiMainServiceService, userService: UserService, authService: AuthService);
    getHello(): object[];
    getUserApi(): Promise<(import(".prisma/client").User & {
        modules: import(".prisma/client").Module[];
        company: import(".prisma/client").Company & {
            sub_company: import(".prisma/client").Sub_company[];
        };
    })[]>;
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
    verifyUser(dto: UserCreatedDto): Promise<import(".prisma/client").User & {
        modules: import(".prisma/client").Module[];
        company: import(".prisma/client").Company & {
            sub_company: import(".prisma/client").Sub_company[];
        };
    }>;
}
