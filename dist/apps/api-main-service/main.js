/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dotenv = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const api_main_service_module_1 = __webpack_require__(3);
__webpack_require__(26);
const swagger_1 = __webpack_require__(6);
const swagger_2 = __webpack_require__(27);
(__webpack_require__(1).config)();
dotenv.config();
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = yield core_1.NestFactory.create(api_main_service_module_1.ApiMainServiceModule);
    swagger_1.SwaggerModule.setup('main/api', app, (0, swagger_2.createDocument)(app));
    yield app.startAllMicroservices();
    yield app.listen(4000);
    console.info('SERVER IS RUNNING ON PORT', 4000);
}))();


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiMainServiceModule = void 0;
const common_1 = __webpack_require__(4);
const api_main_service_controller_1 = __webpack_require__(5);
const api_main_service_service_1 = __webpack_require__(7);
const user_service_1 = __webpack_require__(8);
const auth_service_1 = __webpack_require__(14);
const prisma_service_1 = __webpack_require__(10);
const mailer_1 = __webpack_require__(18);
const jwt_1 = __webpack_require__(25);
const config_1 = __webpack_require__(15);
let ApiMainServiceModule = class ApiMainServiceModule {
};
ApiMainServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
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
            jwt_1.JwtModule.register({}),
        ],
        controllers: [api_main_service_controller_1.ApiMainServiceController],
        providers: [
            api_main_service_service_1.ApiMainServiceService,
            user_service_1.UserService,
            auth_service_1.AuthService,
            prisma_service_1.PrismaService,
            config_1.ConfigService,
        ],
    })
], ApiMainServiceModule);
exports.ApiMainServiceModule = ApiMainServiceModule;


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiMainServiceController = void 0;
const openapi = __webpack_require__(6);
const common_1 = __webpack_require__(4);
const api_main_service_service_1 = __webpack_require__(7);
const user_service_1 = __webpack_require__(8);
const auth_service_1 = __webpack_require__(14);
const auth_dto_1 = __webpack_require__(20);
const userCreated_dto_1 = __webpack_require__(23);
let ApiMainServiceController = class ApiMainServiceController {
    constructor(apiMainServiceService, userService, authService) {
        this.apiMainServiceService = apiMainServiceService;
        this.userService = userService;
        this.authService = authService;
    }
    getHello() {
        return this.apiMainServiceService.getAll();
    }
    getUserApi() {
        return this.userService.getUser();
    }
    signup(dto) {
        return this.authService.signup(dto);
    }
    signin(dto) {
        return this.authService.signin(dto);
    }
    forgotPassword(dto) {
        return this.authService.forgotPassword(dto);
    }
    resetPassword(dto) {
        return this.authService.resetPassword(dto);
    }
    verifyUser(dto) {
        return this.userService.verifyUser(dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ApiMainServiceController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)("get-user"),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "getUserApi", null);
__decorate([
    (0, common_1.Post)("signup"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthDto]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)("signin"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthSignInDto]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "signin", null);
__decorate([
    (0, common_1.Patch)("forgot-password"),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.PasswordDto]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Patch)("reset-password"),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ResetPassDto]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Patch)("handle-user"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userCreated_dto_1.UserCreatedDto]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "verifyUser", null);
ApiMainServiceController = __decorate([
    (0, common_1.Controller)("main"),
    __metadata("design:paramtypes", [api_main_service_service_1.ApiMainServiceService,
        user_service_1.UserService,
        auth_service_1.AuthService])
], ApiMainServiceController);
exports.ApiMainServiceController = ApiMainServiceController;


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiMainServiceService = void 0;
const common_1 = __webpack_require__(4);
let ApiMainServiceService = class ApiMainServiceService {
    getAll() {
        return [
            { _id: 1, name: 'Art' },
            { _id: 2, name: 'Science' },
            { _id: 3, name: 'Math' },
        ];
    }
};
ApiMainServiceService = __decorate([
    (0, common_1.Injectable)()
], ApiMainServiceService);
exports.ApiMainServiceService = ApiMainServiceService;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const prisma_service_1 = __webpack_require__(10);
const error_functions_1 = __webpack_require__(13);
let UserService = class UserService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.user);
        this.prisma = prisma;
    }
    verifyUser(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.prisma.user.findUnique({
                    where: {
                        email: dto.email,
                    },
                });
                if (dto.verifyUser)
                    yield this.prisma.user.update({
                        where: {
                            email: dto.email,
                        },
                        data: {
                            verified: dto.verifyUser,
                        },
                    });
                if (dto.role)
                    yield this.prisma.user.update({
                        where: {
                            email: dto.email,
                        },
                        data: {
                            role: dto.role,
                        },
                    });
                if (dto.companyName)
                    yield this.prisma.user.update({
                        where: {
                            email: dto.email,
                        },
                        data: {
                            company: {
                                connect: {
                                    name: dto.companyName,
                                },
                            },
                        },
                    });
                const moduleData = yield this.prisma.module.findMany({
                    where: { userId: user.id },
                });
                for (const { name, controls, } of moduleData) {
                    if (!(dto === null || dto === void 0 ? void 0 : dto.moduleAccess.some((item2) => item2.name === name))) {
                        yield this.prisma.module.deleteMany({
                            where: {
                                AND: [
                                    {
                                        userId: user.id,
                                    },
                                    {
                                        name,
                                    },
                                ],
                            },
                        });
                    }
                }
                for (const { name, controls, } of dto === null || dto === void 0 ? void 0 : dto.moduleAccess) {
                    moduleData.some((item2) => item2.name === name)
                        ? yield this.prisma.module.updateMany({
                            where: {
                                AND: [
                                    {
                                        userId: user.id,
                                    },
                                    {
                                        name,
                                    },
                                ],
                            },
                            data: {
                                name,
                                controls,
                                userId: user.id,
                            },
                        })
                        : yield this.prisma.module.createMany({
                            data: {
                                name,
                                controls,
                                userId: user.id,
                            },
                        });
                }
                const updatedUser = yield this.prisma.user.findUnique({
                    where: {
                        email: dto.email,
                    },
                    include: {
                        modules: true,
                        company: {
                            include: {
                                sub_company: true,
                            },
                        },
                    },
                });
                return updatedUser;
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.user.findMany({
                    orderBy: {
                        updatedAt: 'desc',
                    },
                    include: {
                        company: {
                            include: {
                                sub_company: true,
                            },
                        },
                        modules: true,
                    },
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CrudService = void 0;
const common_1 = __webpack_require__(4);
let CrudService = class CrudService {
    constructor(delegate) {
        this.delegate = delegate;
    }
    getDelegate() {
        return this.delegate;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.delegate.findMany({
                    orderBy: {
                        updatedAt: 'desc',
                    },
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.delegate.findUnique({
                    where: {
                        id,
                    },
                });
                if (!record)
                    throw new common_1.NotFoundException('No record found!');
                return record;
            }
            catch (err) {
                throw err;
            }
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.delegate.create(data);
            }
            catch (err) {
                if ((err.code = 'P2002')) {
                    throw new common_1.ForbiddenException('Record already exists');
                }
                throw err;
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.delegate.update({
                    where: {
                        id,
                    },
                    data,
                });
            }
            catch (err) {
                if (err.code === 'P2025') {
                    throw new common_1.NotFoundException('No record found!');
                }
                throw err;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.delegate.delete({
                    where: {
                        id,
                    },
                });
            }
            catch (err) {
                if (err.code === 'P2025') {
                    throw new common_1.NotFoundException('No record found!');
                }
                throw err;
            }
        });
    }
};
CrudService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], CrudService);
exports.CrudService = CrudService;


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(4);
const dist_1 = __webpack_require__(11);
const client_1 = __webpack_require__(12);
let PrismaService = class PrismaService extends client_1.PrismaClient {
    constructor(config) {
        super({
            datasources: {
                db: {
                    url: config.get('DATABASE_URL'),
                },
            },
        });
    }
};
PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dist_1.ConfigService])
], PrismaService);
exports.PrismaService = PrismaService;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("@nestjs/config/dist");

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prismaError = void 0;
const common_1 = __webpack_require__(4);
const prismaError = (err) => {
    if (err.code == 'P2025') {
        throw new common_1.NotFoundException(err.meta.cause);
    }
    if (err.code == 'P2002') {
        throw new common_1.ForbiddenException(`Same record already exist. Unique constraint required for ${err.meta.target}`);
    }
    throw err;
};
exports.prismaError = prismaError;


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(4);
const config_1 = __webpack_require__(15);
const dist_1 = __webpack_require__(16);
const prisma_service_1 = __webpack_require__(10);
const bcrypt = __webpack_require__(17);
const mailer_1 = __webpack_require__(18);
const crypto_1 = __webpack_require__(19);
let AuthService = class AuthService {
    constructor(mailerService, prisma, jwt, config) {
        this.mailerService = mailerService;
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    signToken(userId, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                sub: userId,
                email,
            };
            const secret = this.config.get('JWT_SECRET');
            const token = yield this.jwt.signAsync(payload, {
                expiresIn: '5d',
                secret: secret,
            });
            return { token };
        });
    }
    signup(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const salt = yield bcrypt.genSalt(10);
                const password = yield bcrypt.hash(dto.password, salt);
                const user = yield this.prisma.user.create({
                    data: {
                        email: dto.email,
                        password,
                    },
                });
                return user;
            }
            catch (error) {
                if (error.code === 'P2002') {
                    throw new common_1.ForbiddenException('Email already exists');
                }
                throw error;
            }
        });
    }
    signin(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.prisma.user.findUnique({
                    where: {
                        email: dto.email,
                    },
                    include: {
                        company: {
                            include: {
                                sub_company: true,
                            },
                        },
                        modules: true
                    },
                });
                if (!user)
                    throw new common_1.ForbiddenException('User does not exist');
                const passMatch = yield bcrypt.compare(dto.password, user.password);
                if (!passMatch)
                    throw new common_1.ForbiddenException('Password is incorrect');
                delete user.password;
                return {
                    jwt: (yield this.signToken(user.id, user.email)).token,
                    user,
                };
            }
            catch (error) {
                throw error;
            }
        });
    }
    forgotPassword(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.prisma.user.findUnique({
                    where: {
                        email: dto.email,
                    },
                });
                if (!user)
                    throw new common_1.ForbiddenException('Email does not exist');
                const token = (0, crypto_1.randomInt)(111111, 999999).toString();
                yield this.prisma.user.update({
                    where: {
                        email: user.email,
                    },
                    data: {
                        passwordResetToken: token,
                        passwordResetAt: new Date(),
                    },
                });
                const link = 'https://randomlink.com';
                this.mailerService.sendMail({
                    to: user.email,
                    html: `<p>We heard that you lost your password. Sorry about that!</p><p>But don’t worry! You can use the following OTP to reset your password:</p><p>OTP : ${token}</p><p>URL : ${link}</p>`,
                });
                return 'Password reset link sent to your email';
            }
            catch (error) {
                throw error;
            }
        });
    }
    resetPassword(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.prisma.user.findFirst({
                    where: {
                        AND: [
                            {
                                email: dto.email,
                            },
                            {
                                passwordResetToken: dto.token,
                            },
                        ],
                    },
                });
                if (!user)
                    throw new common_1.ForbiddenException('Incorrect or invalid code provided');
                const salt = yield bcrypt.genSalt(10);
                const password = yield bcrypt.hash(dto.password, salt);
                yield this.prisma.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        passwordResetToken: null,
                        password: password,
                    },
                });
                return 'Password changed successfully!';
            }
            catch (error) {
                throw error;
            }
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        prisma_service_1.PrismaService,
        dist_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt/dist");

/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetPassDto = exports.PasswordDto = exports.AuthSignInDto = exports.AuthDto = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(21);
const common_decorator_1 = __webpack_require__(22);
class AuthDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, password: { required: true, type: () => String }, company: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthDto.prototype, "password", void 0);
__decorate([
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], AuthDto.prototype, "company", void 0);
exports.AuthDto = AuthDto;
class AuthSignInDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, password: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthSignInDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthSignInDto.prototype, "password", void 0);
exports.AuthSignInDto = AuthSignInDto;
class PasswordDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PasswordDto.prototype, "email", void 0);
exports.PasswordDto = PasswordDto;
class ResetPassDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, password: { required: true, type: () => String }, token: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResetPassDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResetPassDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResetPassDto.prototype, "token", void 0);
exports.ResetPassDto = ResetPassDto;


/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayValidator = exports.ArrayOptionalValidator = exports.NumberValidator = exports.NumberOptionalValidator = exports.StringValidator = exports.StringOptionalValidator = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(21);
function StringOptionalValidator() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiProperty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)());
}
exports.StringOptionalValidator = StringOptionalValidator;
function StringValidator() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiProperty)(), (0, class_validator_1.IsString)());
}
exports.StringValidator = StringValidator;
function NumberOptionalValidator() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiProperty)(), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 10 }));
}
exports.NumberOptionalValidator = NumberOptionalValidator;
function NumberValidator() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiProperty)(), (0, class_validator_1.IsNumber)());
}
exports.NumberValidator = NumberValidator;
function ArrayOptionalValidator() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiProperty)(), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)());
}
exports.ArrayOptionalValidator = ArrayOptionalValidator;
function ArrayValidator() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiProperty)(), (0, class_validator_1.IsArray)());
}
exports.ArrayValidator = ArrayValidator;


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCreatedDto = exports.ControlsArray = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const client_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(21);
const common_decorator_1 = __webpack_require__(22);
const types_1 = __webpack_require__(24);
class ControlsArray {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => Object }, controls: { required: true, enum: (__webpack_require__(24).ModuleTypeAccess), isArray: true } };
    }
}
__decorate([
    (0, common_decorator_1.StringValidator)(),
    (0, class_validator_1.IsEnum)(client_1.ModuleName),
    __metadata("design:type", String)
], ControlsArray.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ControlsArray.prototype, "controls", void 0);
exports.ControlsArray = ControlsArray;
class UserCreatedDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, moduleAccess: { required: true, type: () => [(__webpack_require__(23).ControlsArray)] }, role: { required: true, enum: (__webpack_require__(24).Role) }, companyName: { required: true, type: () => String }, verifyUser: { required: true, type: () => Boolean } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserCreatedDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        type: ControlsArray,
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UserCreatedDto.prototype, "moduleAccess", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: types_1.Role }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(types_1.Role),
    __metadata("design:type", String)
], UserCreatedDto.prototype, "role", void 0);
__decorate([
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], UserCreatedDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UserCreatedDto.prototype, "verifyUser", void 0);
exports.UserCreatedDto = UserCreatedDto;


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModuleTypeAccess = exports.Role = void 0;
var Role;
(function (Role) {
    Role["SuperAdmin"] = "SuperAdmin";
    Role["Admin"] = "Admin";
    Role["BranchUser"] = "BranchUser";
    Role["FactoryUser"] = "FactoryUser";
    Role["Labour"] = "Labour";
})(Role = exports.Role || (exports.Role = {}));
var ModuleTypeAccess;
(function (ModuleTypeAccess) {
    ModuleTypeAccess["Read"] = "Read";
    ModuleTypeAccess["Edit"] = "Edit";
    ModuleTypeAccess["Delete"] = "Delete";
})(ModuleTypeAccess = exports.ModuleTypeAccess || (exports.ModuleTypeAccess = {}));


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createDocument = void 0;
const swagger_1 = __webpack_require__(6);
const swagger_config_1 = __webpack_require__(28);
function createDocument(app) {
    const builder = new swagger_1.DocumentBuilder()
        .addSecurity('basic', {
        type: 'http',
        scheme: 'basic',
    })
        .setTitle(swagger_config_1.SWAGGER_CONFIG.title)
        .setDescription(swagger_config_1.SWAGGER_CONFIG.description)
        .setContact(process.env.SWAGGER_CONTACT_NAME, process.env.SWAGGER_CONTACT_URL, process.env.SWAGGER_CONTACT_EMAIL)
        .setExternalDoc('Project on Github', process.env.SWAGGER_PROJECT_DETAILS)
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    }, 'access-token')
        .setVersion(swagger_config_1.SWAGGER_CONFIG.version)
        .addServer(process.env.SWAGGER_LOCAL_ENDPOINT, 'local url')
        .addServer(process.env.SWAGGER_STAG_ENDPOINT, 'stag url');
    const options = builder.build();
    return swagger_1.SwaggerModule.createDocument(app, options);
}
exports.createDocument = createDocument;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SWAGGER_CONFIG = void 0;
exports.SWAGGER_CONFIG = {
    title: 'ERP-Nestjs-API',
    description: 'Bitontree-ERP',
    version: '1.0',
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;