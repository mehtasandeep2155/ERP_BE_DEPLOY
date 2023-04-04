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
__webpack_require__(8);
const swagger_1 = __webpack_require__(6);
const swagger_2 = __webpack_require__(9);
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
let ApiMainServiceModule = class ApiMainServiceModule {
};
ApiMainServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [api_main_service_controller_1.ApiMainServiceController],
        providers: [api_main_service_service_1.ApiMainServiceService],
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiMainServiceController = void 0;
const openapi = __webpack_require__(6);
const common_1 = __webpack_require__(4);
const api_main_service_service_1 = __webpack_require__(7);
let ApiMainServiceController = class ApiMainServiceController {
    constructor(apiMainServiceService) {
        this.apiMainServiceService = apiMainServiceService;
    }
    getHello() {
        return this.apiMainServiceService.getAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ApiMainServiceController.prototype, "getHello", null);
ApiMainServiceController = __decorate([
    (0, common_1.Controller)('main'),
    __metadata("design:paramtypes", [api_main_service_service_1.ApiMainServiceService])
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
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createDocument = void 0;
const swagger_1 = __webpack_require__(6);
const swagger_config_1 = __webpack_require__(10);
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
/* 10 */
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