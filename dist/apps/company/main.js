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
__webpack_require__(3);
const swagger_1 = __webpack_require__(4);
const swagger_2 = __webpack_require__(5);
const company_module_1 = __webpack_require__(7);
(__webpack_require__(1).config)();
dotenv.config();
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = yield core_1.NestFactory.create(company_module_1.CompanyModule);
    swagger_1.SwaggerModule.setup('api/v1', app, (0, swagger_2.createDocument)(app));
    yield app.startAllMicroservices();
    yield app.listen(process.env.MODULE_PORT || 3400);
    console.info('SERVER IS RUNNING ON PORT', process.env.MODULE_PORT || 3400);
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
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createDocument = void 0;
const swagger_1 = __webpack_require__(4);
const swagger_config_1 = __webpack_require__(6);
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
/* 6 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SWAGGER_CONFIG = void 0;
exports.SWAGGER_CONFIG = {
    title: 'ERP-Nestjs-API',
    description: 'Bitontree-ERP',
    version: '1.0',
};


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
exports.CompanyModule = void 0;
const common_1 = __webpack_require__(8);
const config_1 = __webpack_require__(9);
const prisma_service_1 = __webpack_require__(10);
const company_controller_1 = __webpack_require__(13);
const company_service_1 = __webpack_require__(17);
const subcompany_module_1 = __webpack_require__(22);
const subcompany_service_1 = __webpack_require__(21);
const redisStore = (__webpack_require__(24).redisStore);
let CompanyModule = class CompanyModule {
};
CompanyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_1.CacheModule.register({
                isGlobal: true,
                store: redisStore,
                host: 'localhost',
                port: 6379,
                ttl: 10,
            }),
            subcompany_module_1.SubcompanyModule,
        ],
        controllers: [company_controller_1.CompanyController],
        providers: [
            company_service_1.CompanyService,
            prisma_service_1.PrismaService,
            config_1.ConfigService,
            subcompany_service_1.SubcompanyService,
        ],
    })
], CompanyModule);
exports.CompanyModule = CompanyModule;


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

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
const common_1 = __webpack_require__(8);
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
exports.CompanyController = void 0;
const openapi = __webpack_require__(4);
const common_1 = __webpack_require__(8);
const company_dto_1 = __webpack_require__(14);
const company_service_1 = __webpack_require__(17);
const subcompany_dto_1 = __webpack_require__(20);
const subcompany_service_1 = __webpack_require__(21);
let CompanyController = class CompanyController {
    constructor(companyService, subcompanyService) {
        this.companyService = companyService;
        this.subcompanyService = subcompanyService;
    }
    getSubCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.subcompanyService.get();
        });
    }
    getSubCompany(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.subcompanyService.getById(id);
        });
    }
    createSubCompany(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.subcompanyService.create({
                data: Object.assign({}, dto),
            });
        });
    }
    updateSubCompany(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.subcompanyService.update(id, dto);
        });
    }
    deleteSubCompany(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.subcompanyService.delete(id);
        });
    }
    getCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.companyService.getCompany();
        });
    }
    getCompany(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.companyService.getCompanyById(id);
        });
    }
    createCompany(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.companyService.createCompany(dto);
        });
    }
    updateCompany(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.companyService.updateCompany(id, dto);
        });
    }
    deleteCompany(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.companyService.delete(id);
        });
    }
};
__decorate([
    (0, common_1.Get)('subcompany'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getSubCompanies", null);
__decorate([
    (0, common_1.Get)('subcompany/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getSubCompany", null);
__decorate([
    (0, common_1.Post)('subcompany'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subcompany_dto_1.SubCompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "createSubCompany", null);
__decorate([
    (0, common_1.Patch)('subcompany/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, subcompany_dto_1.SubCompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "updateSubCompany", null);
__decorate([
    (0, common_1.Delete)('subcompany/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "deleteSubCompany", null);
__decorate([
    (0, common_1.Get)('company'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getCompanies", null);
__decorate([
    (0, common_1.Get)('company/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getCompany", null);
__decorate([
    (0, common_1.Post)('company'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_dto_1.CompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "createCompany", null);
__decorate([
    (0, common_1.Patch)('company/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, company_dto_1.CompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "updateCompany", null);
__decorate([
    (0, common_1.Delete)('company/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "deleteCompany", null);
CompanyController = __decorate([
    (0, common_1.Controller)('company'),
    __metadata("design:paramtypes", [company_service_1.CompanyService,
        subcompany_service_1.SubcompanyService])
], CompanyController);
exports.CompanyController = CompanyController;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompanyDto = void 0;
const openapi = __webpack_require__(4);
const swagger_1 = __webpack_require__(4);
const common_decorator_1 = __webpack_require__(15);
const class_validator_1 = __webpack_require__(16);
class CompanyDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, subCompanyId: { required: true, type: () => [String] } };
    }
}
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], CompanyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CompanyDto.prototype, "subCompanyId", void 0);
exports.CompanyDto = CompanyDto;


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayValidator = exports.ArrayOptionalValidator = exports.NumberValidator = exports.NumberOptionalValidator = exports.StringValidator = exports.StringOptionalValidator = void 0;
const common_1 = __webpack_require__(8);
const swagger_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(16);
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
/* 16 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 17 */
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
exports.CompanyService = void 0;
const common_1 = __webpack_require__(8);
const crud_service_1 = __webpack_require__(18);
const error_functions_1 = __webpack_require__(19);
const prisma_service_1 = __webpack_require__(10);
const mock_1 = __webpack_require__(25);
let CompanyService = class CompanyService extends crud_service_1.CrudService {
    constructor(prisma, cacheManager) {
        super(prisma.company);
        this.prisma = prisma;
        this.cacheManager = cacheManager;
    }
    getCompany() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cachedData = yield this.cacheManager.get(mock_1.companyKey);
                if (cachedData) {
                    return cachedData;
                }
                else {
                    const record = yield this.prisma.company.findMany({
                        include: {
                            sub_company: true,
                        },
                    });
                    yield this.cacheManager.set(mock_1.companyKey, record);
                    return record;
                }
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    getCompanyById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.prisma.company.findUnique({
                    where: {
                        id,
                    },
                    include: {
                        sub_company: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    createCompany(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.prisma.company.create({
                    data: {
                        name: dto.name,
                        sub_company: {
                            connect: dto.subCompanyId.map((item) => {
                                return {
                                    id: item,
                                };
                            }),
                        },
                    },
                    include: {
                        sub_company: true,
                    },
                });
                if (record)
                    yield this.cacheManager.del(mock_1.companyKey);
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    updateCompany(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.prisma.company.findUnique({
                    where: {
                        id,
                    },
                    select: {
                        sub_company: {
                            select: {
                                id: true,
                            },
                        },
                    },
                });
                let disconnected = [];
                for (const { id } of company.sub_company) {
                    if (!dto.subCompanyId.includes(id))
                        disconnected.push(id);
                }
                if (disconnected && disconnected.length > 0)
                    yield this.prisma.company.update({
                        where: { id },
                        data: {
                            name: dto.name,
                            sub_company: {
                                disconnect: disconnected.map((item) => {
                                    return {
                                        id: item,
                                    };
                                }),
                            },
                        },
                    });
                if (dto.subCompanyId &&
                    dto.subCompanyId.length > 0)
                    yield this.prisma.company.update({
                        where: { id },
                        data: {
                            name: dto.name,
                            sub_company: {
                                connect: dto.subCompanyId.map((item) => {
                                    return {
                                        id: item,
                                    };
                                }),
                            },
                        },
                    });
                const result = yield this.prisma.company.findUnique({
                    where: {
                        id,
                    },
                    include: {
                        sub_company: true,
                    },
                });
                return result;
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
};
CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, Object])
], CompanyService);
exports.CompanyService = CompanyService;


/***/ }),
/* 18 */
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
const common_1 = __webpack_require__(8);
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
                return yield this.delegate.findMany();
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
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prismaError = void 0;
const common_1 = __webpack_require__(8);
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
exports.SubCompanyDto = void 0;
const openapi = __webpack_require__(4);
const common_decorator_1 = __webpack_require__(15);
class SubCompanyDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String } };
    }
}
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], SubCompanyDto.prototype, "name", void 0);
exports.SubCompanyDto = SubCompanyDto;


/***/ }),
/* 21 */
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
exports.SubcompanyService = void 0;
const common_1 = __webpack_require__(8);
const crud_service_1 = __webpack_require__(18);
const prisma_service_1 = __webpack_require__(10);
let SubcompanyService = class SubcompanyService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.sub_company);
        this.prisma = prisma;
    }
};
SubcompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubcompanyService);
exports.SubcompanyService = SubcompanyService;


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubcompanyModule = void 0;
const common_1 = __webpack_require__(8);
const subcompany_service_1 = __webpack_require__(21);
const subcompany_controller_1 = __webpack_require__(23);
const prisma_service_1 = __webpack_require__(10);
const config_1 = __webpack_require__(9);
let SubcompanyModule = class SubcompanyModule {
};
SubcompanyModule = __decorate([
    (0, common_1.Module)({
        providers: [
            subcompany_service_1.SubcompanyService,
            prisma_service_1.PrismaService,
            config_1.ConfigService,
        ],
        controllers: [subcompany_controller_1.SubcompanyController],
    })
], SubcompanyModule);
exports.SubcompanyModule = SubcompanyModule;


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
exports.SubcompanyController = void 0;
const openapi = __webpack_require__(4);
const common_1 = __webpack_require__(8);
const subcompany_service_1 = __webpack_require__(21);
let SubcompanyController = class SubcompanyController {
    constructor(subcompanyService) {
        this.subcompanyService = subcompanyService;
    }
};
SubcompanyController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [subcompany_service_1.SubcompanyService])
], SubcompanyController);
exports.SubcompanyController = SubcompanyController;


/***/ }),
/* 24 */
/***/ ((module) => {

module.exports = require("cache-manager-redis-store");

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.companyKey = void 0;
exports.companyKey = 'company';


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