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
exports.handler = void 0;
const dotenv = __webpack_require__(1);
const core_1 = __webpack_require__(2);
__webpack_require__(3);
const serverless_express_1 = __webpack_require__(4);
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(6);
const swagger_2 = __webpack_require__(7);
const product_module_1 = __webpack_require__(9);
(__webpack_require__(1).config)();
dotenv.config();
let cachedServer;
const handler = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
    if (!cachedServer) {
        const nestApp = yield core_1.NestFactory.create(product_module_1.ProductModule, { cors: true });
        nestApp.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
        }));
        swagger_1.SwaggerModule.setup('product/api', nestApp, (0, swagger_2.createDocument)(nestApp));
        yield nestApp.init();
        cachedServer = (0, serverless_express_1.configure)({
            app: nestApp.getHttpAdapter().getInstance(),
        });
    }
    return cachedServer(event, context);
});
exports.handler = handler;


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

module.exports = require("@vendia/serverless-express");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createDocument = void 0;
const swagger_1 = __webpack_require__(6);
const swagger_config_1 = __webpack_require__(8);
function createDocument(app) {
    const builder = new swagger_1.DocumentBuilder()
        .addSecurity('basic', {
        type: 'http',
        scheme: 'basic',
    })
        .setTitle(swagger_config_1.SWAGGER_CONFIG.title)
        .setDescription(swagger_config_1.SWAGGER_CONFIG.description)
        .setBasePath('docs')
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
/* 8 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SWAGGER_CONFIG = void 0;
exports.SWAGGER_CONFIG = {
    title: 'Bitontree-Nestjs-API',
    description: 'Bitontree-ERP',
    version: '1.0',
};


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProductModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductModule = void 0;
const common_1 = __webpack_require__(5);
const product_controller_1 = __webpack_require__(10);
const product_service_1 = __webpack_require__(21);
const color_module_1 = __webpack_require__(34);
const uom_module_1 = __webpack_require__(37);
const productvariant_module_1 = __webpack_require__(39);
const producttype_module_1 = __webpack_require__(41);
const productdimension_module_1 = __webpack_require__(43);
const rate_module_1 = __webpack_require__(45);
const prisma_service_1 = __webpack_require__(14);
const config_1 = __webpack_require__(36);
const purchaseorder_module_1 = __webpack_require__(47);
const color_service_1 = __webpack_require__(11);
const productdimension_service_1 = __webpack_require__(23);
const producttype_service_1 = __webpack_require__(25);
const productvariant_service_1 = __webpack_require__(27);
const purchaseorder_service_1 = __webpack_require__(29);
const rate_service_1 = __webpack_require__(31);
const uom_service_1 = __webpack_require__(33);
let ProductModule = ProductModule_1 = class ProductModule {
};
ProductModule = ProductModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            color_module_1.ColorModule,
            uom_module_1.UomModule,
            productvariant_module_1.ProductvariantModule,
            producttype_module_1.ProducttypeModule,
            productdimension_module_1.ProductdimensionModule,
            rate_module_1.RateModule,
            ProductModule_1,
            purchaseorder_module_1.PurchaseorderModule,
        ],
        controllers: [product_controller_1.ProductController],
        providers: [
            product_service_1.ProductService,
            prisma_service_1.PrismaService,
            config_1.ConfigService,
            color_service_1.ColorService,
            productdimension_service_1.ProductdimensionService,
            producttype_service_1.ProducttypeService,
            productvariant_service_1.ProductvariantService,
            purchaseorder_service_1.PurchaseorderService,
            rate_service_1.RateService,
            uom_service_1.UomService,
        ],
    })
], ProductModule);
exports.ProductModule = ProductModule;


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
exports.ProductController = void 0;
const openapi = __webpack_require__(6);
const common_1 = __webpack_require__(5);
const color_service_1 = __webpack_require__(11);
const color_dto_1 = __webpack_require__(17);
const product_dto_1 = __webpack_require__(20);
const product_service_1 = __webpack_require__(21);
const product_dimension_dto_1 = __webpack_require__(22);
const productdimension_service_1 = __webpack_require__(23);
const product_type_dto_1 = __webpack_require__(24);
const producttype_service_1 = __webpack_require__(25);
const productvariant_dto_1 = __webpack_require__(26);
const productvariant_service_1 = __webpack_require__(27);
const purchaseorder_dto_1 = __webpack_require__(28);
const purchaseorder_service_1 = __webpack_require__(29);
const rate_dto_1 = __webpack_require__(30);
const rate_service_1 = __webpack_require__(31);
const uom_dto_1 = __webpack_require__(32);
const uom_service_1 = __webpack_require__(33);
let ProductController = class ProductController {
    constructor(productService, colorService, productdimensionService, producttypeService, productvariantService, purchaseorderService, rateService, uomService) {
        this.productService = productService;
        this.colorService = colorService;
        this.productdimensionService = productdimensionService;
        this.producttypeService = producttypeService;
        this.productvariantService = productvariantService;
        this.purchaseorderService = purchaseorderService;
        this.rateService = rateService;
        this.uomService = uomService;
    }
    getColor() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.colorService.get();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.colorService.getById(id);
        });
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.colorService.create({
                data: {
                    color: dto.color,
                },
            });
        });
    }
    update(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.colorService.updateColor(id, dto);
        });
    }
    deleteColorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.colorService.delete(id);
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productdimensionService.getDimension();
        });
    }
    getDimensionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productdimensionService.getById(id);
        });
    }
    createProductDimensions(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productdimensionService.createDimensions(dto);
        });
    }
    updateProductDimensions(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productdimensionService.updateDimensions(id, dto);
        });
    }
    deleteDimensionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productdimensionService.delete(id);
        });
    }
    getType() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.producttypeService.get();
        });
    }
    getTypeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.producttypeService.getById(id);
        });
    }
    createProductType(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.producttypeService.createProductType(dto);
        });
    }
    updateType(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.producttypeService.updateType(id, dto);
        });
    }
    deleteTypeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.producttypeService.delete(id);
        });
    }
    getVariants() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productvariantService.getVariant();
        });
    }
    getVariantById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productvariantService.getVariantById(id);
        });
    }
    createProductVariant(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productvariantService.createProductVariant(dto);
        });
    }
    updateProductVariant(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productvariantService.updateProductVariant(id, dto);
        });
    }
    deleteProductVariant(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productvariantService.delete(id);
        });
    }
    getPurchaseOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.purchaseorderService.getPurchaseOrder();
        });
    }
    getPurchaseOrderById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.purchaseorderService.getPurchaseOrderById(id);
        });
    }
    createPurchaseOrder(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.purchaseorderService.createPurchaseOrder(dto);
        });
    }
    updatePurchaseOrder(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.purchaseorderService.updatePurchaseOrder(id, dto);
        });
    }
    deletePurchaseOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.purchaseorderService.delete(id);
        });
    }
    getRate() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rateService.getRate();
        });
    }
    getRateById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rateService.getRateById(id);
        });
    }
    createRate(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rateService.createRate(dto);
        });
    }
    updateRate(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rateService.updateRate(id, dto);
        });
    }
    deleteRateById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rateService.delete(id);
        });
    }
    getUom() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.uomService.get();
        });
    }
    getUomById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.uomService.getById(id);
        });
    }
    createUom(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.uomService.create({
                data: {
                    type: dto.type,
                },
            });
        });
    }
    updateUom(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.uomService.updateUom(id, dto);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.uomService.delete(id);
        });
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productService.getProduct();
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productService.getProductById(id);
        });
    }
    createProduct(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productService.createProduct(dto);
        });
    }
    updateProduct(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productService.updateProduct(id, dto);
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productService.delete(id);
        });
    }
};
__decorate([
    (0, common_1.Get)('color'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getColor", null);
__decorate([
    (0, common_1.Get)('color/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('color'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [color_dto_1.ColorDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('color/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, color_dto_1.ColorDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('color/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteColorById", null);
__decorate([
    (0, common_1.Get)('dimension'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('dimension/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getDimensionById", null);
__decorate([
    (0, common_1.Post)('dimension'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dimension_dto_1.ProductDimensionDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProductDimensions", null);
__decorate([
    (0, common_1.Patch)('dimension/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dimension_dto_1.ProductDimensionDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProductDimensions", null);
__decorate([
    (0, common_1.Delete)('dimension/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteDimensionById", null);
__decorate([
    (0, common_1.Get)('type'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getType", null);
__decorate([
    (0, common_1.Get)('type/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getTypeById", null);
__decorate([
    (0, common_1.Post)('type'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_type_dto_1.ProductTypeDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProductType", null);
__decorate([
    (0, common_1.Patch)('type/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_type_dto_1.ProductTypeDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateType", null);
__decorate([
    (0, common_1.Delete)('type/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteTypeById", null);
__decorate([
    (0, common_1.Get)('variant'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getVariants", null);
__decorate([
    (0, common_1.Get)('variant/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getVariantById", null);
__decorate([
    (0, common_1.Post)('variant'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productvariant_dto_1.ProductVariantDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProductVariant", null);
__decorate([
    (0, common_1.Patch)('variant/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, productvariant_dto_1.ProductVariantDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProductVariant", null);
__decorate([
    (0, common_1.Delete)('variant/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProductVariant", null);
__decorate([
    (0, common_1.Get)('purchase-order'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getPurchaseOrder", null);
__decorate([
    (0, common_1.Get)('purchase-order/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getPurchaseOrderById", null);
__decorate([
    (0, common_1.Post)('purchase-order'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [purchaseorder_dto_1.PurchaseOrderDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createPurchaseOrder", null);
__decorate([
    (0, common_1.Patch)('purchase-order/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, purchaseorder_dto_1.PurchaseOrderDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updatePurchaseOrder", null);
__decorate([
    (0, common_1.Delete)('purchase-order/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deletePurchaseOrder", null);
__decorate([
    (0, common_1.Get)('rate'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getRate", null);
__decorate([
    (0, common_1.Get)('rate/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getRateById", null);
__decorate([
    (0, common_1.Post)('rate'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rate_dto_1.RateDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createRate", null);
__decorate([
    (0, common_1.Patch)('rate/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, rate_dto_1.RateDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateRate", null);
__decorate([
    (0, common_1.Delete)('rate/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteRateById", null);
__decorate([
    (0, common_1.Get)('uom'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getUom", null);
__decorate([
    (0, common_1.Get)('uom/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getUomById", null);
__decorate([
    (0, common_1.Post)('uom'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [uom_dto_1.UomDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createUom", null);
__decorate([
    (0, common_1.Patch)('uom/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, uom_dto_1.UomDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateUom", null);
__decorate([
    (0, common_1.Delete)('uom/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteById", null);
__decorate([
    (0, common_1.Get)('product'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('product/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Post)('product'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Patch)('product/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)('product/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        color_service_1.ColorService,
        productdimension_service_1.ProductdimensionService,
        producttype_service_1.ProducttypeService,
        productvariant_service_1.ProductvariantService,
        purchaseorder_service_1.PurchaseorderService,
        rate_service_1.RateService,
        uom_service_1.UomService])
], ProductController);
exports.ProductController = ProductController;


/***/ }),
/* 11 */
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
exports.ColorService = void 0;
const common_1 = __webpack_require__(5);
const crud_service_1 = __webpack_require__(12);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(14);
let ColorService = class ColorService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.color);
        this.prisma = prisma;
    }
    updateColor(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.color.update({
                    where: {
                        id,
                    },
                    data,
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
};
ColorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ColorService);
exports.ColorService = ColorService;


/***/ }),
/* 12 */
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
const common_1 = __webpack_require__(5);
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
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prismaError = void 0;
const common_1 = __webpack_require__(5);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(5);
const dist_1 = __webpack_require__(15);
const client_1 = __webpack_require__(16);
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
/* 15 */
/***/ ((module) => {

module.exports = require("@nestjs/config/dist");

/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("@prisma/client");

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorDto = void 0;
const openapi = __webpack_require__(6);
const common_decorator_1 = __webpack_require__(18);
class ColorDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { color: { required: true, type: () => String } };
    }
}
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], ColorDto.prototype, "color", void 0);
exports.ColorDto = ColorDto;


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayValidator = exports.ArrayOptionalValidator = exports.NumberValidator = exports.NumberOptionalValidator = exports.StringValidator = exports.StringOptionalValidator = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(19);
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
/* 19 */
/***/ ((module) => {

module.exports = require("class-validator");

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
exports.ProductDto = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const common_decorator_1 = __webpack_require__(18);
const class_validator_1 = __webpack_require__(19);
class ProductDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { count: { required: true, type: () => Number }, rateId: { required: true, type: () => String }, userId: { required: true, type: () => String }, weight: { required: true, type: () => Number }, weightUom: { required: true, type: () => String } };
    }
}
__decorate([
    (0, common_decorator_1.NumberValidator)(),
    __metadata("design:type", Number)
], ProductDto.prototype, "count", void 0);
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], ProductDto.prototype, "rateId", void 0);
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], ProductDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 10 }),
    __metadata("design:type", Number)
], ProductDto.prototype, "weight", void 0);
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], ProductDto.prototype, "weightUom", void 0);
exports.ProductDto = ProductDto;


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
exports.ProductService = void 0;
const common_1 = __webpack_require__(5);
const crud_service_1 = __webpack_require__(12);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(14);
let ProductService = class ProductService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.product);
        this.prisma = prisma;
    }
    getProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.product.findMany({
                    include: {
                        user: true,
                        rate: {
                            include: {
                                color: true,
                                dimension: true,
                                type: true,
                                variant: true,
                            },
                        },
                        weightUom: true,
                    },
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.prisma.product.findUnique({
                    where: {
                        id,
                    },
                    include: {
                        user: true,
                        rate: {
                            include: {
                                color: true,
                                dimension: {
                                    include: {
                                        uom: true,
                                    },
                                },
                                type: true,
                                variant: true,
                            },
                        },
                        weightUom: true,
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
    createProduct(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.product.create({
                    data: {
                        count: dto.count,
                        weight: dto.weight,
                        weightUom: {
                            connect: {
                                type: dto.weightUom,
                            },
                        },
                        rate: {
                            connect: {
                                id: dto.rateId,
                            },
                        },
                        user: {
                            connect: {
                                id: dto.userId,
                            },
                        },
                    },
                    include: {
                        rate: true,
                        user: true,
                        weightUom: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    updateProduct(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.prisma.product.update({
                    where: {
                        id,
                    },
                    data: {
                        count: dto.count,
                        weight: dto.weight,
                        weightUom: {
                            connect: {
                                type: dto.weightUom,
                            },
                        },
                        rate: {
                            connect: {
                                id: dto.rateId,
                            },
                        },
                        user: {
                            connect: {
                                id: dto.userId,
                            },
                        },
                    },
                });
                return record;
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
exports.ProductService = ProductService;


/***/ }),
/* 22 */
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
exports.ProductDimensionDto = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const common_decorator_1 = __webpack_require__(18);
const class_validator_1 = __webpack_require__(19);
class ProductDimensionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { height: { required: true, type: () => Number }, uom: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 10 }),
    __metadata("design:type", Number)
], ProductDimensionDto.prototype, "height", void 0);
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], ProductDimensionDto.prototype, "uom", void 0);
exports.ProductDimensionDto = ProductDimensionDto;


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
exports.ProductdimensionService = void 0;
const common_1 = __webpack_require__(5);
const crud_service_1 = __webpack_require__(12);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(14);
let ProductdimensionService = class ProductdimensionService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.product_dimension);
        this.prisma = prisma;
    }
    getDimension() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.product_dimension.findMany({
                    include: {
                        uom: true,
                    },
                });
            }
            catch (err) { }
        });
    }
    createDimensions(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.prisma.product_dimension.create({
                    data: {
                        height: dto.height,
                        uom: {
                            connect: {
                                type: dto.uom,
                            },
                        },
                    },
                });
                return record;
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    updateDimensions(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.product_dimension.update({
                    where: {
                        id,
                    },
                    data: {
                        height: dto.height,
                        uom: {
                            connect: {
                                type: dto.uom,
                            },
                        },
                    },
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
};
ProductdimensionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductdimensionService);
exports.ProductdimensionService = ProductdimensionService;


/***/ }),
/* 24 */
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
exports.ProductTypeDto = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const client_1 = __webpack_require__(16);
const class_validator_1 = __webpack_require__(19);
class ProductTypeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => Object }, subtype: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.ProductType),
    __metadata("design:type", String)
], ProductTypeDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.ProductSubType),
    __metadata("design:type", String)
], ProductTypeDto.prototype, "subtype", void 0);
exports.ProductTypeDto = ProductTypeDto;


/***/ }),
/* 25 */
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
exports.ProducttypeService = void 0;
const common_1 = __webpack_require__(5);
const error_functions_1 = __webpack_require__(13);
const crud_service_1 = __webpack_require__(12);
const prisma_service_1 = __webpack_require__(14);
let ProducttypeService = class ProducttypeService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.product_type);
        this.prisma = prisma;
    }
    createProductType(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.prisma.product_type.findFirst({
                    where: {
                        AND: [
                            {
                                type: dto.type,
                                subtype: dto.subtype,
                            },
                        ],
                    },
                });
                if (record)
                    throw new common_1.ForbiddenException('Same record already exists');
                if (!record)
                    return yield this.prisma.product_type.create({
                        data: {
                            type: dto.type,
                            subtype: dto.subtype,
                        },
                    });
            }
            catch (err) {
                throw err;
            }
        });
    }
    updateType(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.prisma.product_type.findFirst({
                    where: {
                        AND: [
                            {
                                type: dto.type,
                                subtype: dto.subtype,
                            },
                        ],
                    },
                });
                if (record)
                    throw new common_1.ForbiddenException('Same record already exists');
                if (!record)
                    return yield this.prisma.product_type.update({
                        where: {
                            id,
                        },
                        data: {
                            type: dto.type,
                            subtype: dto.subtype,
                        },
                    });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
};
ProducttypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProducttypeService);
exports.ProducttypeService = ProducttypeService;


/***/ }),
/* 26 */
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
exports.ProductVariantDto = void 0;
const openapi = __webpack_require__(6);
const common_decorator_1 = __webpack_require__(18);
class ProductVariantDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { sectionName: { required: true, type: () => String }, sectionNumber: { required: true, type: () => Number }, width: { required: true, type: () => Number }, height: { required: true, type: () => Number }, thickness: { required: true, type: () => Number }, outerDiameter: { required: true, type: () => Number }, weight: { required: true, type: () => Number }, weightUomId: { required: true, type: () => String } };
    }
}
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], ProductVariantDto.prototype, "sectionName", void 0);
__decorate([
    (0, common_decorator_1.NumberValidator)(),
    __metadata("design:type", Number)
], ProductVariantDto.prototype, "sectionNumber", void 0);
__decorate([
    (0, common_decorator_1.NumberOptionalValidator)(),
    __metadata("design:type", Number)
], ProductVariantDto.prototype, "width", void 0);
__decorate([
    (0, common_decorator_1.NumberOptionalValidator)(),
    __metadata("design:type", Number)
], ProductVariantDto.prototype, "height", void 0);
__decorate([
    (0, common_decorator_1.NumberOptionalValidator)(),
    __metadata("design:type", Number)
], ProductVariantDto.prototype, "thickness", void 0);
__decorate([
    (0, common_decorator_1.NumberOptionalValidator)(),
    __metadata("design:type", Number)
], ProductVariantDto.prototype, "outerDiameter", void 0);
__decorate([
    (0, common_decorator_1.NumberValidator)(),
    __metadata("design:type", Number)
], ProductVariantDto.prototype, "weight", void 0);
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], ProductVariantDto.prototype, "weightUomId", void 0);
exports.ProductVariantDto = ProductVariantDto;


/***/ }),
/* 27 */
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
exports.ProductvariantService = void 0;
const common_1 = __webpack_require__(5);
const crud_service_1 = __webpack_require__(12);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(14);
let ProductvariantService = class ProductvariantService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.product_variant);
        this.prisma = prisma;
    }
    getVariant() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.product_variant.findMany({
                    include: {
                        weightUom: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    getVariantById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.prisma.product_variant.findUnique({
                    where: {
                        id,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    createProductVariant(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.product_variant.create({
                    data: Object.assign({}, dto),
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    updateProductVariant(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.prisma.product_variant.update({
                    where: {
                        id,
                    },
                    data: Object.assign({}, dto),
                });
                if (!record) {
                    throw new common_1.NotFoundException('Record not found!');
                }
                return record;
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
};
ProductvariantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductvariantService);
exports.ProductvariantService = ProductvariantService;


/***/ }),
/* 28 */
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
exports.PurchaseOrderDto = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const common_decorator_1 = __webpack_require__(18);
const class_validator_1 = __webpack_require__(19);
class PurchaseOrderDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { products: { required: true, type: () => [String] }, challan_number: { required: true, type: () => Number }, order_number: { required: true, type: () => Number }, customer_name: { required: true, type: () => String }, has_raw_material: { required: true, type: () => Boolean }, cost_per_kg: { required: true, type: () => Number }, coating_discount: { required: true, type: () => Number }, tax: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], PurchaseOrderDto.prototype, "products", void 0);
__decorate([
    (0, common_decorator_1.NumberValidator)(),
    __metadata("design:type", Number)
], PurchaseOrderDto.prototype, "challan_number", void 0);
__decorate([
    (0, common_decorator_1.NumberValidator)(),
    __metadata("design:type", Number)
], PurchaseOrderDto.prototype, "order_number", void 0);
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], PurchaseOrderDto.prototype, "customer_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PurchaseOrderDto.prototype, "has_raw_material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 10 }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], PurchaseOrderDto.prototype, "cost_per_kg", void 0);
__decorate([
    (0, common_decorator_1.NumberOptionalValidator)(),
    __metadata("design:type", Number)
], PurchaseOrderDto.prototype, "coating_discount", void 0);
__decorate([
    (0, common_decorator_1.NumberOptionalValidator)(),
    __metadata("design:type", Number)
], PurchaseOrderDto.prototype, "tax", void 0);
exports.PurchaseOrderDto = PurchaseOrderDto;


/***/ }),
/* 29 */
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
exports.PurchaseorderService = void 0;
const common_1 = __webpack_require__(5);
const crud_service_1 = __webpack_require__(12);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(14);
let PurchaseorderService = class PurchaseorderService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.purchase_order);
        this.prisma = prisma;
    }
    getPurchaseOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.purchase_order.findMany({
                    include: {
                        products: {
                            include: {
                                rate: {
                                    include: {
                                        variant: true,
                                    },
                                },
                            },
                        },
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    getPurchaseOrderById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.purchase_order.findUnique({
                    where: {
                        id,
                    },
                    include: {
                        products: {
                            include: {
                                rate: {
                                    include: {
                                        variant: true,
                                    },
                                },
                            },
                        },
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    createPurchaseOrder(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let productData = [];
                let netAmounts = {
                    netWeight: 0,
                    netCoatingAmount: 0,
                };
                for (const id of dto.products) {
                    const record = yield this.prisma.product.findUnique({
                        where: {
                            id,
                        },
                        include: {
                            rate: true,
                        },
                    });
                    productData.push({
                        count: record.count,
                        weight: record.weight,
                        single_item_rate: record.rate.rate,
                        coating_amount: record.count * record.rate.rate,
                    });
                    netAmounts.netWeight =
                        netAmounts.netWeight + record.weight;
                    netAmounts.netCoatingAmount =
                        netAmounts.netCoatingAmount +
                            record.count * record.rate.rate;
                }
                const gross_amount = netAmounts.netCoatingAmount +
                    netAmounts.netWeight * dto.cost_per_kg;
                let net_amount = 0;
                dto.coating_discount
                    ? (net_amount =
                        gross_amount - dto.coating_discount)
                    : (net_amount = gross_amount);
                let final_amount = 0;
                dto.tax
                    ? (final_amount =
                        net_amount +
                            net_amount * (dto.tax / 100))
                    : (final_amount = net_amount);
                return yield this.prisma.purchase_order.create({
                    data: {
                        challan_number: dto.challan_number,
                        customer_name: dto.customer_name,
                        order_number: dto.order_number,
                        products: {
                            connect: dto.products.map((id) => {
                                return {
                                    id: id,
                                };
                            }),
                        },
                        has_raw_material: dto.has_raw_material,
                        cost_per_kg: dto.cost_per_kg,
                        coating_amount: netAmounts.netCoatingAmount,
                        net_weight: netAmounts.netWeight,
                        gross_amount: gross_amount,
                        coating_discount: dto.coating_discount,
                        net_amount: net_amount,
                        tax: dto.tax,
                        final_amount: final_amount,
                    },
                    include: {
                        products: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    updatePurchaseOrder(id, dto) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let productData = [];
                let netAmounts = {
                    netWeight: 0,
                    netCoatingAmount: 0,
                };
                let disconnected = [];
                for (const id of dto.products) {
                    const record = yield this.prisma.product.findUnique({
                        where: {
                            id,
                        },
                        include: { rate: true },
                    });
                    productData.push({
                        count: record === null || record === void 0 ? void 0 : record.count,
                        weight: record === null || record === void 0 ? void 0 : record.weight,
                        single_item_rate: (_a = record === null || record === void 0 ? void 0 : record.rate) === null || _a === void 0 ? void 0 : _a.rate,
                        coating_amount: (record === null || record === void 0 ? void 0 : record.count) * ((_b = record === null || record === void 0 ? void 0 : record.rate) === null || _b === void 0 ? void 0 : _b.rate),
                    });
                    netAmounts.netWeight =
                        netAmounts.netWeight + record.weight;
                    netAmounts.netCoatingAmount =
                        netAmounts.netCoatingAmount +
                            record.count * record.rate.rate;
                }
                const currentOrder = yield this.prisma.purchase_order.findUnique({
                    where: { id },
                    include: {
                        products: true,
                    },
                });
                for (const { id, } of currentOrder.products) {
                    if (!dto.products.includes(id))
                        disconnected.push(id);
                }
                if (disconnected && disconnected.length > 0)
                    yield this.prisma.purchase_order.update({
                        where: { id },
                        data: {
                            products: {
                                disconnect: disconnected.map((id) => {
                                    return {
                                        id,
                                    };
                                }),
                            },
                        },
                    });
                const gross_amount = netAmounts.netCoatingAmount +
                    netAmounts.netWeight * dto.cost_per_kg;
                let net_amount = 0;
                dto.coating_discount
                    ? (net_amount =
                        gross_amount - dto.coating_discount)
                    : (net_amount = gross_amount);
                let final_amount = 0;
                dto.tax
                    ? (final_amount =
                        net_amount +
                            net_amount * (dto.tax / 100))
                    : (final_amount = net_amount);
                return yield this.prisma.purchase_order.update({
                    where: {
                        id,
                    },
                    data: {
                        challan_number: dto.challan_number,
                        customer_name: dto.customer_name,
                        order_number: dto.order_number,
                        products: {
                            connect: dto.products.map((id) => {
                                return {
                                    id: id,
                                };
                            }),
                        },
                        has_raw_material: dto.has_raw_material,
                        cost_per_kg: dto.cost_per_kg,
                        coating_amount: netAmounts.netCoatingAmount,
                        net_weight: netAmounts.netWeight,
                        gross_amount: gross_amount,
                        coating_discount: dto.coating_discount,
                        net_amount: net_amount,
                        tax: dto.tax,
                        final_amount: final_amount,
                    },
                    include: {
                        products: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
};
PurchaseorderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PurchaseorderService);
exports.PurchaseorderService = PurchaseorderService;


/***/ }),
/* 30 */
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
exports.RateDto = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const common_decorator_1 = __webpack_require__(18);
const class_validator_1 = __webpack_require__(19);
class RateDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { rate: { required: true, type: () => Number }, variantId: { required: true, type: () => String }, colorId: { required: true, type: () => String }, typeId: { required: true, type: () => String }, dimensionId: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 10 }),
    __metadata("design:type", Number)
], RateDto.prototype, "rate", void 0);
__decorate([
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], RateDto.prototype, "variantId", void 0);
__decorate([
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], RateDto.prototype, "colorId", void 0);
__decorate([
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], RateDto.prototype, "typeId", void 0);
__decorate([
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], RateDto.prototype, "dimensionId", void 0);
exports.RateDto = RateDto;


/***/ }),
/* 31 */
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
exports.RateService = void 0;
const common_1 = __webpack_require__(5);
const crud_service_1 = __webpack_require__(12);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(14);
let RateService = class RateService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.rate);
        this.prisma = prisma;
    }
    getRate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.rate.findMany({
                    include: {
                        color: true,
                        dimension: true,
                        type: true,
                        variant: true,
                    },
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    getRateById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.prisma.rate.findUnique({
                    where: {
                        id,
                    },
                    include: {
                        color: true,
                        dimension: true,
                        type: true,
                        variant: true,
                    },
                });
                if (!record)
                    throw new common_1.NotFoundException('No record found!');
            }
            catch (err) {
                throw err;
            }
        });
    }
    createRate(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.rate.create({
                    data: {
                        rate: dto.rate,
                        color: {
                            connect: {
                                id: dto.colorId,
                            },
                        },
                        type: {
                            connect: {
                                id: dto.typeId,
                            },
                        },
                        dimension: {
                            connect: {
                                id: dto.dimensionId,
                            },
                        },
                        variant: {
                            connect: {
                                id: dto.variantId,
                            },
                        },
                    },
                    include: {
                        color: true,
                        dimension: true,
                        type: true,
                        variant: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    updateRate(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.rate.update({
                    where: {
                        id,
                    },
                    data: {
                        rate: dto.rate,
                        color: {
                            connect: {
                                id: dto.colorId,
                            },
                        },
                        type: {
                            connect: {
                                id: dto.typeId,
                            },
                        },
                        dimension: {
                            connect: {
                                id: dto.dimensionId,
                            },
                        },
                        variant: {
                            connect: {
                                id: dto.variantId,
                            },
                        },
                    },
                    include: {
                        color: true,
                        dimension: true,
                        type: true,
                        variant: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
};
RateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RateService);
exports.RateService = RateService;


/***/ }),
/* 32 */
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
exports.UomDto = void 0;
const openapi = __webpack_require__(6);
const common_decorator_1 = __webpack_require__(18);
class UomDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => String } };
    }
}
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], UomDto.prototype, "type", void 0);
exports.UomDto = UomDto;


/***/ }),
/* 33 */
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
exports.UomService = void 0;
const common_1 = __webpack_require__(5);
const crud_service_1 = __webpack_require__(12);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(14);
let UomService = class UomService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.uom);
        this.prisma = prisma;
    }
    updateUom(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.uom.update({
                    where: {
                        id,
                    },
                    data,
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
};
UomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UomService);
exports.UomService = UomService;


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorModule = void 0;
const common_1 = __webpack_require__(5);
const color_service_1 = __webpack_require__(11);
const color_controller_1 = __webpack_require__(35);
const prisma_service_1 = __webpack_require__(14);
const config_1 = __webpack_require__(36);
let ColorModule = class ColorModule {
};
ColorModule = __decorate([
    (0, common_1.Module)({
        providers: [
            color_service_1.ColorService,
            prisma_service_1.PrismaService,
            config_1.ConfigService,
        ],
        controllers: [color_controller_1.ColorController],
    })
], ColorModule);
exports.ColorModule = ColorModule;


/***/ }),
/* 35 */
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
exports.ColorController = void 0;
const openapi = __webpack_require__(6);
const common_1 = __webpack_require__(5);
const color_service_1 = __webpack_require__(11);
const color_dto_1 = __webpack_require__(17);
let ColorController = class ColorController {
    constructor(colorService) {
        this.colorService = colorService;
    }
    getColor() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.colorService.get();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.colorService.getById(id);
        });
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.colorService.create({
                data: {
                    color: dto.color,
                },
            });
        });
    }
    update(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.colorService.updateColor(id, dto);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.colorService.delete(id);
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ColorController.prototype, "getColor", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ColorController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [color_dto_1.ColorDto]),
    __metadata("design:returntype", Promise)
], ColorController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, color_dto_1.ColorDto]),
    __metadata("design:returntype", Promise)
], ColorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ColorController.prototype, "deleteById", null);
ColorController = __decorate([
    (0, common_1.Controller)('color'),
    __metadata("design:paramtypes", [color_service_1.ColorService])
], ColorController);
exports.ColorController = ColorController;


/***/ }),
/* 36 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UomModule = void 0;
const common_1 = __webpack_require__(5);
const uom_service_1 = __webpack_require__(33);
const uom_controller_1 = __webpack_require__(38);
const prisma_service_1 = __webpack_require__(14);
const config_1 = __webpack_require__(36);
let UomModule = class UomModule {
};
UomModule = __decorate([
    (0, common_1.Module)({
        providers: [
            uom_service_1.UomService,
            prisma_service_1.PrismaService,
            config_1.ConfigService,
        ],
        controllers: [uom_controller_1.UomController],
    })
], UomModule);
exports.UomModule = UomModule;


/***/ }),
/* 38 */
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
exports.UomController = void 0;
const openapi = __webpack_require__(6);
const common_1 = __webpack_require__(5);
const uom_dto_1 = __webpack_require__(32);
const uom_service_1 = __webpack_require__(33);
let UomController = class UomController {
    constructor(uomService) {
        this.uomService = uomService;
    }
    getColor() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.uomService.get();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.uomService.getById(id);
        });
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.uomService.create({
                data: {
                    type: dto.type,
                },
            });
        });
    }
    update(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.uomService.updateUom(id, dto);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.uomService.delete(id);
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UomController.prototype, "getColor", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UomController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [uom_dto_1.UomDto]),
    __metadata("design:returntype", Promise)
], UomController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, uom_dto_1.UomDto]),
    __metadata("design:returntype", Promise)
], UomController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UomController.prototype, "deleteById", null);
UomController = __decorate([
    (0, common_1.Controller)('product/uom'),
    __metadata("design:paramtypes", [uom_service_1.UomService])
], UomController);
exports.UomController = UomController;


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductvariantModule = void 0;
const common_1 = __webpack_require__(5);
const productvariant_service_1 = __webpack_require__(27);
const productvariant_controller_1 = __webpack_require__(40);
const prisma_service_1 = __webpack_require__(14);
const config_1 = __webpack_require__(36);
let ProductvariantModule = class ProductvariantModule {
};
ProductvariantModule = __decorate([
    (0, common_1.Module)({
        providers: [
            productvariant_service_1.ProductvariantService,
            prisma_service_1.PrismaService,
            config_1.ConfigService,
        ],
        controllers: [productvariant_controller_1.ProductvariantController],
    })
], ProductvariantModule);
exports.ProductvariantModule = ProductvariantModule;


/***/ }),
/* 40 */
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
exports.ProductvariantController = void 0;
const openapi = __webpack_require__(6);
const common_1 = __webpack_require__(5);
const productvariant_dto_1 = __webpack_require__(26);
const productvariant_service_1 = __webpack_require__(27);
let ProductvariantController = class ProductvariantController {
    constructor(productvariantService) {
        this.productvariantService = productvariantService;
    }
    getVariants() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productvariantService.getVariant();
        });
    }
    getVariantById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productvariantService.getVariantById(id);
        });
    }
    createProductVariant(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productvariantService.createProductVariant(dto);
        });
    }
    updateProductVariant(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productvariantService.updateProductVariant(id, dto);
        });
    }
    deleteProductVariant(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productvariantService.delete(id);
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductvariantController.prototype, "getVariants", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductvariantController.prototype, "getVariantById", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productvariant_dto_1.ProductVariantDto]),
    __metadata("design:returntype", Promise)
], ProductvariantController.prototype, "createProductVariant", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, productvariant_dto_1.ProductVariantDto]),
    __metadata("design:returntype", Promise)
], ProductvariantController.prototype, "updateProductVariant", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductvariantController.prototype, "deleteProductVariant", null);
ProductvariantController = __decorate([
    (0, common_1.Controller)('product/productvariant'),
    __metadata("design:paramtypes", [productvariant_service_1.ProductvariantService])
], ProductvariantController);
exports.ProductvariantController = ProductvariantController;


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProducttypeModule = void 0;
const common_1 = __webpack_require__(5);
const producttype_service_1 = __webpack_require__(25);
const producttype_controller_1 = __webpack_require__(42);
const prisma_service_1 = __webpack_require__(14);
const config_1 = __webpack_require__(36);
let ProducttypeModule = class ProducttypeModule {
};
ProducttypeModule = __decorate([
    (0, common_1.Module)({
        providers: [
            producttype_service_1.ProducttypeService,
            prisma_service_1.PrismaService,
            config_1.ConfigService,
        ],
        controllers: [producttype_controller_1.ProducttypeController],
    })
], ProducttypeModule);
exports.ProducttypeModule = ProducttypeModule;


/***/ }),
/* 42 */
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
exports.ProducttypeController = void 0;
const openapi = __webpack_require__(6);
const common_1 = __webpack_require__(5);
const product_type_dto_1 = __webpack_require__(24);
const producttype_service_1 = __webpack_require__(25);
let ProducttypeController = class ProducttypeController {
    constructor(producttypeService) {
        this.producttypeService = producttypeService;
    }
    getColor() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.producttypeService.get();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.producttypeService.getById(id);
        });
    }
    createProductType(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.producttypeService.createProductType(dto);
        });
    }
    update(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.producttypeService.updateType(id, dto);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.producttypeService.delete(id);
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProducttypeController.prototype, "getColor", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProducttypeController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_type_dto_1.ProductTypeDto]),
    __metadata("design:returntype", Promise)
], ProducttypeController.prototype, "createProductType", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_type_dto_1.ProductTypeDto]),
    __metadata("design:returntype", Promise)
], ProducttypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProducttypeController.prototype, "deleteById", null);
ProducttypeController = __decorate([
    (0, common_1.Controller)('product/product-type'),
    __metadata("design:paramtypes", [producttype_service_1.ProducttypeService])
], ProducttypeController);
exports.ProducttypeController = ProducttypeController;


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductdimensionModule = void 0;
const common_1 = __webpack_require__(5);
const productdimension_service_1 = __webpack_require__(23);
const productdimension_controller_1 = __webpack_require__(44);
const prisma_service_1 = __webpack_require__(14);
const config_1 = __webpack_require__(36);
let ProductdimensionModule = class ProductdimensionModule {
};
ProductdimensionModule = __decorate([
    (0, common_1.Module)({
        providers: [
            productdimension_service_1.ProductdimensionService,
            prisma_service_1.PrismaService,
            config_1.ConfigService,
        ],
        controllers: [productdimension_controller_1.ProductdimensionController],
    })
], ProductdimensionModule);
exports.ProductdimensionModule = ProductdimensionModule;


/***/ }),
/* 44 */
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
exports.ProductdimensionController = void 0;
const openapi = __webpack_require__(6);
const common_1 = __webpack_require__(5);
const product_dimension_dto_1 = __webpack_require__(22);
const productdimension_service_1 = __webpack_require__(23);
let ProductdimensionController = class ProductdimensionController {
    constructor(productdimensionService) {
        this.productdimensionService = productdimensionService;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productdimensionService.get();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productdimensionService.getById(id);
        });
    }
    createProductDimensions(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productdimensionService.createDimensions(dto);
        });
    }
    updateProductDimensions(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productdimensionService.updateDimensions(id, dto);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productdimensionService.delete(id);
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductdimensionController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductdimensionController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dimension_dto_1.ProductDimensionDto]),
    __metadata("design:returntype", Promise)
], ProductdimensionController.prototype, "createProductDimensions", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dimension_dto_1.ProductDimensionDto]),
    __metadata("design:returntype", Promise)
], ProductdimensionController.prototype, "updateProductDimensions", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductdimensionController.prototype, "deleteById", null);
ProductdimensionController = __decorate([
    (0, common_1.Controller)('product/productdimension'),
    __metadata("design:paramtypes", [productdimension_service_1.ProductdimensionService])
], ProductdimensionController);
exports.ProductdimensionController = ProductdimensionController;


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RateModule = void 0;
const common_1 = __webpack_require__(5);
const rate_service_1 = __webpack_require__(31);
const rate_controller_1 = __webpack_require__(46);
const prisma_service_1 = __webpack_require__(14);
const config_1 = __webpack_require__(36);
let RateModule = class RateModule {
};
RateModule = __decorate([
    (0, common_1.Module)({
        providers: [
            rate_service_1.RateService,
            prisma_service_1.PrismaService,
            config_1.ConfigService,
        ],
        controllers: [rate_controller_1.RateController],
    })
], RateModule);
exports.RateModule = RateModule;


/***/ }),
/* 46 */
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
exports.RateController = void 0;
const openapi = __webpack_require__(6);
const common_1 = __webpack_require__(5);
const rate_dto_1 = __webpack_require__(30);
const rate_service_1 = __webpack_require__(31);
let RateController = class RateController {
    constructor(rateService) {
        this.rateService = rateService;
    }
    getRate() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rateService.getRate();
        });
    }
    getRateById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rateService.getRateById(id);
        });
    }
    createRate(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rateService.createRate(dto);
        });
    }
    updateRate(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rateService.updateRate(id, dto);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rateService.delete(id);
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RateController.prototype, "getRate", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RateController.prototype, "getRateById", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rate_dto_1.RateDto]),
    __metadata("design:returntype", Promise)
], RateController.prototype, "createRate", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, rate_dto_1.RateDto]),
    __metadata("design:returntype", Promise)
], RateController.prototype, "updateRate", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RateController.prototype, "deleteById", null);
RateController = __decorate([
    (0, common_1.Controller)('product/rate'),
    __metadata("design:paramtypes", [rate_service_1.RateService])
], RateController);
exports.RateController = RateController;


/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PurchaseorderModule = void 0;
const common_1 = __webpack_require__(5);
const purchaseorder_service_1 = __webpack_require__(29);
const purchaseorder_controller_1 = __webpack_require__(48);
const prisma_service_1 = __webpack_require__(14);
const config_1 = __webpack_require__(36);
let PurchaseorderModule = class PurchaseorderModule {
};
PurchaseorderModule = __decorate([
    (0, common_1.Module)({
        providers: [
            purchaseorder_service_1.PurchaseorderService,
            prisma_service_1.PrismaService,
            config_1.ConfigService,
        ],
        controllers: [purchaseorder_controller_1.PurchaseorderController],
    })
], PurchaseorderModule);
exports.PurchaseorderModule = PurchaseorderModule;


/***/ }),
/* 48 */
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
exports.PurchaseorderController = void 0;
const openapi = __webpack_require__(6);
const common_1 = __webpack_require__(5);
const decorators_1 = __webpack_require__(49);
const purchaseorder_dto_1 = __webpack_require__(28);
const purchaseorder_service_1 = __webpack_require__(29);
let PurchaseorderController = class PurchaseorderController {
    constructor(purchaseorderService) {
        this.purchaseorderService = purchaseorderService;
    }
    getPurchaseOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.purchaseorderService.getPurchaseOrder();
        });
    }
    getPurchaseOrderById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.purchaseorderService.getPurchaseOrderById(id);
        });
    }
    createPurchaseOrder(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.purchaseorderService.createPurchaseOrder(dto);
        });
    }
    updatePurchaseOrder(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.purchaseorderService.updatePurchaseOrder(id, dto);
        });
    }
    deletePurchaseOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.purchaseorderService.delete(id);
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PurchaseorderController.prototype, "getPurchaseOrder", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseorderController.prototype, "getPurchaseOrderById", null);
__decorate([
    (0, decorators_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [purchaseorder_dto_1.PurchaseOrderDto]),
    __metadata("design:returntype", Promise)
], PurchaseorderController.prototype, "createPurchaseOrder", null);
__decorate([
    (0, decorators_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, purchaseorder_dto_1.PurchaseOrderDto]),
    __metadata("design:returntype", Promise)
], PurchaseorderController.prototype, "updatePurchaseOrder", null);
__decorate([
    (0, decorators_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseorderController.prototype, "deletePurchaseOrder", null);
PurchaseorderController = __decorate([
    (0, common_1.Controller)('product/purchaseorder'),
    __metadata("design:paramtypes", [purchaseorder_service_1.PurchaseorderService])
], PurchaseorderController);
exports.PurchaseorderController = PurchaseorderController;


/***/ }),
/* 49 */
/***/ ((module) => {

module.exports = require("@nestjs/common/decorators");

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