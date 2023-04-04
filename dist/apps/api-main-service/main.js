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
__webpack_require__(30);
const swagger_1 = __webpack_require__(6);
const swagger_2 = __webpack_require__(31);
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
const jwt_1 = __webpack_require__(29);
const config_1 = __webpack_require__(15);
const company_service_1 = __webpack_require__(26);
const subcompany_service_1 = __webpack_require__(25);
const color_service_1 = __webpack_require__(33);
const product_service_1 = __webpack_require__(48);
const productdimension_service_1 = __webpack_require__(42);
const producttype_service_1 = __webpack_require__(45);
const productvariant_service_1 = __webpack_require__(43);
const purchaseorder_service_1 = __webpack_require__(44);
const rate_service_1 = __webpack_require__(46);
const uom_service_1 = __webpack_require__(47);
const stock_service_1 = __webpack_require__(49);
const stockactions_service_1 = __webpack_require__(50);
const inventory_service_1 = __webpack_require__(51);
const inventoryview_service_1 = __webpack_require__(52);
const customer_service_1 = __webpack_require__(58);
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
            company_service_1.CompanyService,
            subcompany_service_1.SubcompanyService,
            color_service_1.ColorService,
            productdimension_service_1.ProductdimensionService,
            productvariant_service_1.ProductvariantService,
            purchaseorder_service_1.PurchaseorderService,
            producttype_service_1.ProducttypeService,
            rate_service_1.RateService,
            uom_service_1.UomService,
            product_service_1.ProductService,
            stock_service_1.StockService,
            stockactions_service_1.StockactionsService,
            inventory_service_1.InventoryService,
            inventoryview_service_1.InventoryviewService,
            customer_service_1.CustomerService,
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
exports.ApiMainServiceController = void 0;
const openapi = __webpack_require__(6);
const common_1 = __webpack_require__(4);
const api_main_service_service_1 = __webpack_require__(7);
const user_service_1 = __webpack_require__(8);
const auth_service_1 = __webpack_require__(14);
const auth_dto_1 = __webpack_require__(20);
const userCreated_dto_1 = __webpack_require__(23);
const subcompany_service_1 = __webpack_require__(25);
const company_service_1 = __webpack_require__(26);
const subcompany_dto_1 = __webpack_require__(27);
const company_dto_1 = __webpack_require__(28);
const color_service_1 = __webpack_require__(33);
const color_dto_1 = __webpack_require__(34);
const product_dto_1 = __webpack_require__(35);
const product_dimension_dto_1 = __webpack_require__(36);
const product_type_dto_1 = __webpack_require__(37);
const productvariant_dto_1 = __webpack_require__(38);
const purchaseorder_dto_1 = __webpack_require__(39);
const rate_dto_1 = __webpack_require__(40);
const uom_dto_1 = __webpack_require__(41);
const productdimension_service_1 = __webpack_require__(42);
const productvariant_service_1 = __webpack_require__(43);
const purchaseorder_service_1 = __webpack_require__(44);
const producttype_service_1 = __webpack_require__(45);
const rate_service_1 = __webpack_require__(46);
const uom_service_1 = __webpack_require__(47);
const product_service_1 = __webpack_require__(48);
const inventory_dto_1 = __webpack_require__(53);
const inventoryview_dto_1 = __webpack_require__(54);
const stock_dto_1 = __webpack_require__(55);
const stockactions_dto_1 = __webpack_require__(56);
const inventoryview_service_1 = __webpack_require__(52);
const inventory_service_1 = __webpack_require__(51);
const stock_service_1 = __webpack_require__(49);
const stockactions_service_1 = __webpack_require__(50);
const customer_dto_1 = __webpack_require__(57);
const customer_service_1 = __webpack_require__(58);
let ApiMainServiceController = class ApiMainServiceController {
    constructor(apiMainServiceService, userService, authService, subcompanyService, companyService, colorService, productdimensionService, productvariantService, purchaseorderService, producttypeService, rateService, uomService, productService, stockService, stockActionsService, inventoryviewService, inventoryService, customerService) {
        this.apiMainServiceService = apiMainServiceService;
        this.userService = userService;
        this.authService = authService;
        this.subcompanyService = subcompanyService;
        this.companyService = companyService;
        this.colorService = colorService;
        this.productdimensionService = productdimensionService;
        this.productvariantService = productvariantService;
        this.purchaseorderService = purchaseorderService;
        this.producttypeService = producttypeService;
        this.rateService = rateService;
        this.uomService = uomService;
        this.productService = productService;
        this.stockService = stockService;
        this.stockActionsService = stockActionsService;
        this.inventoryviewService = inventoryviewService;
        this.inventoryService = inventoryService;
        this.customerService = customerService;
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
    verifyPurchaseOrder(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.purchaseorderService.verifyPurchaseOrder(id, dto);
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
    getView() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.inventoryviewService.getView();
        });
    }
    getViewById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.inventoryviewService.getViewById(id);
        });
    }
    createView(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.inventoryviewService.createView(dto);
        });
    }
    updateView(dto, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.inventoryviewService.updateView(dto, id);
        });
    }
    deleteView(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.inventoryviewService.delete(id);
        });
    }
    getStock() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockService.getStock();
        });
    }
    getStockById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockService.getStockById(id);
        });
    }
    createStock(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockService.createStock(dto);
        });
    }
    updateStock(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockService.updateStock(id, dto);
        });
    }
    deleteStock(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockService.delete(id);
        });
    }
    getAction() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockActionsService.get();
        });
    }
    getActionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockActionsService.getById(id);
        });
    }
    createActions(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockActionsService.createActions(dto);
        });
    }
    updateActions(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockActionsService.updateActions(id, dto);
        });
    }
    deleteActions(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.stockActionsService.delete(id);
        });
    }
    getInventory() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.inventoryService.getInventory();
        });
    }
    getInventoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.inventoryService.getInventoryById(id);
        });
    }
    createInventory(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.inventoryService.createInventory(dto);
        });
    }
    deleteInventory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.inventoryService.delete(id);
        });
    }
    getCustomer() {
        return this.customerService.getCustomer();
    }
    getCustomerById(id) {
        return this.customerService.getCustomerById(id);
    }
    createCustomer(dto) {
        return this.customerService.createCustomer(dto);
    }
    updateCustomer(id, dto) {
        return this.customerService.updateCustomer(id, dto);
    }
    deleteCustomer(id) {
        return this.customerService.delete(id);
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
    (0, common_1.Get)("user/get-user"),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "getUserApi", null);
__decorate([
    (0, common_1.Post)("user/signup"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthDto]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)("user/signin"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthSignInDto]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "signin", null);
__decorate([
    (0, common_1.Patch)("user/forgot-password"),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.PasswordDto]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Patch)("user/reset-password"),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ResetPassDto]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Patch)("user/handle-user"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userCreated_dto_1.UserCreatedDto]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "verifyUser", null);
__decorate([
    (0, common_1.Get)("company/subcompany"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getSubCompanies", null);
__decorate([
    (0, common_1.Get)("company/subcompany/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getSubCompany", null);
__decorate([
    (0, common_1.Post)("company/subcompany"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subcompany_dto_1.SubCompanyDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "createSubCompany", null);
__decorate([
    (0, common_1.Patch)("company/subcompany/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, subcompany_dto_1.SubCompanyDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "updateSubCompany", null);
__decorate([
    (0, common_1.Delete)("company/subcompany/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deleteSubCompany", null);
__decorate([
    (0, common_1.Get)("company/company"),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getCompanies", null);
__decorate([
    (0, common_1.Get)("company/company/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getCompany", null);
__decorate([
    (0, common_1.Post)("company/company"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_dto_1.CompanyDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "createCompany", null);
__decorate([
    (0, common_1.Patch)("company/company/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, company_dto_1.CompanyDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "updateCompany", null);
__decorate([
    (0, common_1.Delete)("company/company/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deleteCompany", null);
__decorate([
    (0, common_1.Get)("product/color"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getColor", null);
__decorate([
    (0, common_1.Get)("product/color/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)("product/color"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [color_dto_1.ColorDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)("product/color/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, color_dto_1.ColorDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("product/color/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deleteColorById", null);
__decorate([
    (0, common_1.Get)("product/dimension"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "get", null);
__decorate([
    (0, common_1.Get)("product/dimension/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getDimensionById", null);
__decorate([
    (0, common_1.Post)("product/dimension"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dimension_dto_1.ProductDimensionDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "createProductDimensions", null);
__decorate([
    (0, common_1.Patch)("product/dimension/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dimension_dto_1.ProductDimensionDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "updateProductDimensions", null);
__decorate([
    (0, common_1.Delete)("product/dimension/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deleteDimensionById", null);
__decorate([
    (0, common_1.Get)("product/type"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getType", null);
__decorate([
    (0, common_1.Get)("product/type/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getTypeById", null);
__decorate([
    (0, common_1.Post)("product/type"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_type_dto_1.ProductTypeDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "createProductType", null);
__decorate([
    (0, common_1.Patch)("product/type/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_type_dto_1.ProductTypeDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "updateType", null);
__decorate([
    (0, common_1.Delete)("product/type/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deleteTypeById", null);
__decorate([
    (0, common_1.Get)("product/variant"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getVariants", null);
__decorate([
    (0, common_1.Get)("product/variant/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getVariantById", null);
__decorate([
    (0, common_1.Post)("product/variant"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productvariant_dto_1.ProductVariantDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "createProductVariant", null);
__decorate([
    (0, common_1.Patch)("product/variant/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, productvariant_dto_1.ProductVariantDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "updateProductVariant", null);
__decorate([
    (0, common_1.Delete)("product/variant/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deleteProductVariant", null);
__decorate([
    (0, common_1.Get)("product/purchase-order"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getPurchaseOrder", null);
__decorate([
    (0, common_1.Get)("product/purchase-order/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getPurchaseOrderById", null);
__decorate([
    (0, common_1.Post)("product/purchase-order"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [purchaseorder_dto_1.PurchaseOrderDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "createPurchaseOrder", null);
__decorate([
    (0, common_1.Patch)("product/purchase-order/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, purchaseorder_dto_1.PurchaseOrderDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "updatePurchaseOrder", null);
__decorate([
    (0, common_1.Patch)("product/verify-po/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, purchaseorder_dto_1.VerifyPurchaseOrderDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "verifyPurchaseOrder", null);
__decorate([
    (0, common_1.Delete)("product/purchase-order/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deletePurchaseOrder", null);
__decorate([
    (0, common_1.Get)("product/rate"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getRate", null);
__decorate([
    (0, common_1.Get)("product/rate/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getRateById", null);
__decorate([
    (0, common_1.Post)("product/rate"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rate_dto_1.RateDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "createRate", null);
__decorate([
    (0, common_1.Patch)("product/rate/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, rate_dto_1.RateDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "updateRate", null);
__decorate([
    (0, common_1.Delete)("product/rate/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deleteRateById", null);
__decorate([
    (0, common_1.Get)("product/uom"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getUom", null);
__decorate([
    (0, common_1.Get)("product/uom/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getUomById", null);
__decorate([
    (0, common_1.Post)("product/uom"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [uom_dto_1.UomDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "createUom", null);
__decorate([
    (0, common_1.Patch)("product/uom/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, uom_dto_1.UomDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "updateUom", null);
__decorate([
    (0, common_1.Delete)("product/uom/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deleteById", null);
__decorate([
    (0, common_1.Get)("product/product"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)("product/product/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Post)("product/product"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Patch)("product/product/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)("product/product/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.Get)("inventory/view"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getView", null);
__decorate([
    (0, common_1.Get)("inventory/view/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getViewById", null);
__decorate([
    (0, common_1.Post)("inventory/view"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventoryview_dto_1.InventoryViewDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "createView", null);
__decorate([
    (0, common_1.Patch)("inventory/view/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventoryview_dto_1.InventoryViewDto, String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "updateView", null);
__decorate([
    (0, common_1.Delete)("inventory/view/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deleteView", null);
__decorate([
    (0, common_1.Get)("inventory/stock"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getStock", null);
__decorate([
    (0, common_1.Get)("inventory/stock/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getStockById", null);
__decorate([
    (0, common_1.Post)("inventory/stock"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stock_dto_1.StockDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "createStock", null);
__decorate([
    (0, common_1.Patch)("inventory/stock/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, stock_dto_1.StockDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "updateStock", null);
__decorate([
    (0, common_1.Delete)("inventory/stock/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deleteStock", null);
__decorate([
    (0, common_1.Get)("inventory/stock-actions"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getAction", null);
__decorate([
    (0, common_1.Get)("inventory/stock-actions/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getActionById", null);
__decorate([
    (0, common_1.Post)("inventory/stock-actions"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stockactions_dto_1.StockActionsDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "createActions", null);
__decorate([
    (0, common_1.Patch)("inventory/stock-actions/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, stockactions_dto_1.StockActionsDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "updateActions", null);
__decorate([
    (0, common_1.Delete)("inventory/stock-actions/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deleteActions", null);
__decorate([
    (0, common_1.Get)("inventory/inventory"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getInventory", null);
__decorate([
    (0, common_1.Get)("inventory/inventory/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "getInventoryById", null);
__decorate([
    (0, common_1.Post)("inventory/inventory"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_dto_1.InventoryDto]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "createInventory", null);
__decorate([
    (0, common_1.Delete)("inventory/inventory/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiMainServiceController.prototype, "deleteInventory", null);
__decorate([
    (0, common_1.Get)("customer/customer"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "getCustomer", null);
__decorate([
    (0, common_1.Get)("customer/customer/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "getCustomerById", null);
__decorate([
    (0, common_1.Post)("customer/customer"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_dto_1.CustomerDto]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "createCustomer", null);
__decorate([
    (0, common_1.Patch)("customer/customer/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, customer_dto_1.CustomerDto]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "updateCustomer", null);
__decorate([
    (0, common_1.Delete)("customer/customer/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApiMainServiceController.prototype, "deleteCustomer", null);
ApiMainServiceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [api_main_service_service_1.ApiMainServiceService,
        user_service_1.UserService,
        auth_service_1.AuthService,
        subcompany_service_1.SubcompanyService,
        company_service_1.CompanyService,
        color_service_1.ColorService,
        productdimension_service_1.ProductdimensionService,
        productvariant_service_1.ProductvariantService,
        purchaseorder_service_1.PurchaseorderService,
        producttype_service_1.ProducttypeService,
        rate_service_1.RateService,
        uom_service_1.UomService,
        product_service_1.ProductService,
        stock_service_1.StockService,
        stockactions_service_1.StockactionsService,
        inventoryview_service_1.InventoryviewService,
        inventory_service_1.InventoryService,
        customer_service_1.CustomerService])
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
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
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
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(10);
let CompanyService = class CompanyService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.company);
        this.prisma = prisma;
    }
    getCompany() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.prisma.company.findMany({
                    orderBy: {
                        updatedAt: 'desc',
                    },
                    include: {
                        sub_company: true,
                    },
                });
                return record;
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
                return record;
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
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CompanyService);
exports.CompanyService = CompanyService;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubCompanyDto = void 0;
const openapi = __webpack_require__(6);
const common_decorator_1 = __webpack_require__(22);
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
exports.CompanyDto = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(21);
const common_decorator_1 = __webpack_require__(22);
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
/* 29 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 30 */
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createDocument = void 0;
const swagger_1 = __webpack_require__(6);
const swagger_config_1 = __webpack_require__(32);
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
/* 32 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SWAGGER_CONFIG = void 0;
exports.SWAGGER_CONFIG = {
    title: 'ERP-Nestjs-API',
    description: 'Bitontree-ERP',
    version: '1.0',
};


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
exports.ColorService = void 0;
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(10);
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
/* 34 */
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
const common_decorator_1 = __webpack_require__(22);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductDto = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(21);
const common_decorator_1 = __webpack_require__(22);
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
/* 36 */
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
const class_validator_1 = __webpack_require__(21);
const common_decorator_1 = __webpack_require__(22);
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
/* 37 */
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
const client_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(21);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductVariantDto = void 0;
const openapi = __webpack_require__(6);
const common_decorator_1 = __webpack_require__(22);
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
/* 39 */
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
exports.VerifyPurchaseOrderDto = exports.PurchaseOrderDto = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const client_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(21);
const common_decorator_1 = __webpack_require__(22);
class PurchaseOrderDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { products: { required: true, type: () => [String] }, challan_number: { required: true, type: () => Number }, order_number: { required: true, type: () => Number }, customer_id: { required: true, type: () => String }, customer_name: { required: true, type: () => String }, customer_email: { required: true, type: () => String }, customer_phone: { required: true, type: () => String, pattern: "/^[0-9]{10}$/" }, credit_note: { required: true, type: () => String }, has_raw_material: { required: true, type: () => Boolean }, cost_per_kg: { required: true, type: () => Number }, coating_discount: { required: true, type: () => Number }, tax: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, common_decorator_1.ArrayValidator)(),
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
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], PurchaseOrderDto.prototype, "customer_id", void 0);
__decorate([
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], PurchaseOrderDto.prototype, "customer_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], PurchaseOrderDto.prototype, "customer_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.Matches)(/^[0-9]{10}$/, {
        message: 'Invalid Mobile Number',
    }),
    __metadata("design:type", String)
], PurchaseOrderDto.prototype, "customer_phone", void 0);
__decorate([
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], PurchaseOrderDto.prototype, "credit_note", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PurchaseOrderDto.prototype, "has_raw_material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 10 }),
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
class VerifyPurchaseOrderDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.POStatus),
    __metadata("design:type", String)
], VerifyPurchaseOrderDto.prototype, "status", void 0);
exports.VerifyPurchaseOrderDto = VerifyPurchaseOrderDto;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RateDto = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(21);
const common_decorator_1 = __webpack_require__(22);
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
/* 41 */
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
const common_decorator_1 = __webpack_require__(22);
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
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(10);
let ProductdimensionService = class ProductdimensionService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.product_dimension);
        this.prisma = prisma;
    }
    getDimension() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.product_dimension.findMany({
                    orderBy: {
                        updatedAt: 'desc',
                    },
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
/* 43 */
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
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(10);
let ProductvariantService = class ProductvariantService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.product_variant);
        this.prisma = prisma;
    }
    getVariant() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.product_variant.findMany({
                    orderBy: {
                        updatedAt: 'desc',
                    },
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
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(10);
let PurchaseorderService = class PurchaseorderService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.purchase_order);
        this.prisma = prisma;
    }
    getPurchaseOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.purchase_order.findMany({
                    orderBy: {
                        updatedAt: 'desc',
                    },
                    include: {
                        products: {
                            include: {
                                rate: {
                                    include: {
                                        variant: true,
                                        color: true,
                                        dimension: true,
                                        type: true,
                                    },
                                },
                                user: true,
                                weightUom: true,
                            },
                        },
                        customer_info: true,
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
                                        color: true,
                                        dimension: true,
                                        type: true,
                                    },
                                },
                                user: true,
                                weightUom: true,
                            },
                        },
                        customer_info: true,
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
                        id: record.id,
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
                        order_number: dto.order_number,
                        products: {
                            connect: productData.map(({ id }) => {
                                return {
                                    id,
                                };
                            }),
                        },
                        customer_info: dto.customer_id &&
                            dto.customer_id.length > 0
                            ? {
                                connect: {
                                    id: dto.customer_id,
                                },
                            }
                            : {
                                create: {
                                    name: dto.customer_name,
                                    email: dto.customer_email,
                                    phone: dto.customer_phone,
                                    credit_note: dto.credit_note,
                                },
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
                        customer_info: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    updatePurchaseOrder(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let productData = [];
                let netAmounts = {
                    netWeight: 0,
                    netCoatingAmount: 0,
                };
                let disconnected = [];
                const currentOrder = yield this.prisma.purchase_order.findUnique({
                    where: { id },
                    include: {
                        products: true,
                    },
                });
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
                        id: record.id,
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
                        customer_info: dto.customer_id &&
                            dto.customer_id.length > 0
                            ? {
                                connect: {
                                    id: dto.customer_id,
                                },
                            }
                            : {
                                create: {
                                    name: dto.customer_name,
                                    email: dto.customer_email,
                                    phone: dto.customer_phone,
                                    credit_note: dto.credit_note,
                                },
                            },
                        order_number: dto.order_number,
                        products: {
                            connect: productData.map(({ id }) => {
                                return {
                                    id,
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
                        customer_info: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    verifyPurchaseOrder(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.purchase_order.update({
                    where: {
                        id,
                    },
                    data: {
                        status: dto.status,
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
/* 45 */
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
const common_1 = __webpack_require__(4);
const error_functions_1 = __webpack_require__(13);
const crud_service_1 = __webpack_require__(9);
const prisma_service_1 = __webpack_require__(10);
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
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(10);
let RateService = class RateService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.rate);
        this.prisma = prisma;
    }
    getRate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.rate.findMany({
                    orderBy: {
                        updatedAt: 'desc',
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
/* 47 */
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
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(10);
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
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(10);
let ProductService = class ProductService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.product);
        this.prisma = prisma;
    }
    getProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.product.findMany({
                    orderBy: {
                        updatedAt: 'desc',
                    },
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
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    updateProduct(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.product.update({
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
/* 49 */
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
exports.StockService = void 0;
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(10);
let StockService = class StockService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.stock);
        this.prisma = prisma;
    }
    getStock() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.stock.findMany({
                    orderBy: {
                        updatedAt: 'desc',
                    },
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
    getStockById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.stock.findUnique({
                    where: {
                        id,
                    },
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
    createStock(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type, weight, count, weightUomId } = dto;
                return yield this.prisma.stock.create({
                    data: {
                        type,
                        weight,
                        count,
                        weightUomId,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    updateStock(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type, count, weight, weightUomId } = dto;
            try {
                return yield this.prisma.stock.update({
                    where: {
                        id,
                    },
                    data: {
                        type,
                        count,
                        weight,
                        weightUomId,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
};
StockService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StockService);
exports.StockService = StockService;


/***/ }),
/* 50 */
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
exports.StockactionsService = void 0;
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(10);
let StockactionsService = class StockactionsService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.stockActions);
        this.prisma = prisma;
    }
    createActions(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type, increaseInStock, decreaseInStock, } = dto;
                return yield this.prisma.stockActions.create({
                    data: {
                        type: type,
                        IncreaseInStock: increaseInStock &&
                            (increaseInStock === null || increaseInStock === void 0 ? void 0 : increaseInStock.length) > 0
                            ? {
                                count: increaseInStock[0].count,
                                weight: increaseInStock[0].weight,
                                weightUom: increaseInStock[0]
                                    .weightUom,
                            }
                            : undefined,
                        DecreaseInStock: decreaseInStock &&
                            (decreaseInStock === null || decreaseInStock === void 0 ? void 0 : decreaseInStock.length) > 0
                            ? {
                                count: decreaseInStock[0].count,
                                weight: decreaseInStock[0].weight,
                                weightUom: decreaseInStock[0]
                                    .weightUom,
                            }
                            : undefined,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    updateActions(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type, increaseInStock, decreaseInStock, } = dto;
                return yield this.prisma.stockActions.update({
                    where: {
                        id,
                    },
                    data: {
                        type: type,
                        IncreaseInStock: increaseInStock &&
                            (increaseInStock === null || increaseInStock === void 0 ? void 0 : increaseInStock.length) > 0
                            ? {
                                count: increaseInStock[0].count,
                                weight: increaseInStock[0].weight,
                                weightUom: increaseInStock[0]
                                    .weightUom,
                            }
                            : undefined,
                        DecreaseInStock: decreaseInStock &&
                            (decreaseInStock === null || decreaseInStock === void 0 ? void 0 : decreaseInStock.length) > 0
                            ? {
                                count: decreaseInStock[0].count,
                                weight: decreaseInStock[0].weight,
                                weightUom: decreaseInStock[0]
                                    .weightUom,
                            }
                            : undefined,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
};
StockactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StockactionsService);
exports.StockactionsService = StockactionsService;


/***/ }),
/* 51 */
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
exports.InventoryService = void 0;
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(10);
let InventoryService = class InventoryService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.inventory);
        this.prisma = prisma;
    }
    getInventory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.inventory.findMany({
                    orderBy: {
                        updatedAt: 'desc',
                    },
                    include: {
                        inventory_view: {
                            include: {
                                coating: true,
                                color: true,
                                dimension: true,
                                variant: true,
                                weightUom: true,
                            },
                        },
                        finishedChange_after_action: true,
                        finishedStock_after_action: true,
                        garbageChange_after_action: true,
                        garbageStock_after_action: true,
                        rawChange_after_action: true,
                        rawStock_after_action: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    getInventoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.inventory.findUnique({
                    where: {
                        id,
                    },
                    include: {
                        inventory_view: {
                            include: {
                                coating: true,
                                color: true,
                                dimension: true,
                                variant: true,
                                weightUom: true,
                            },
                        },
                        finishedChange_after_action: true,
                        finishedStock_after_action: true,
                        garbageChange_after_action: true,
                        garbageStock_after_action: true,
                        rawChange_after_action: true,
                        rawStock_after_action: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    createInventory(dto) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { inventory_view, rawStockChange, garbageStockChange, finishedStockChange, } = dto;
                const openingStock = yield this.prisma.stock.findMany({
                    include: { weightUom: true },
                });
                const openingRawStock = openingStock.find((item) => item.type === 'raw');
                const { count } = openingRawStock;
                const openingGarbageStock = openingStock.find((item) => item.type === 'garbage');
                const openingFinishedStock = openingStock.find((item) => item.type === 'finished');
                const totalRawChangeCount = openingRawStock.count +
                    ((_d = (_c = (_b = (_a = rawStockChange[0]) === null || _a === void 0 ? void 0 : _a.increaseInStock) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.count) !== null && _d !== void 0 ? _d : 0) -
                    ((_h = (_g = (_f = (_e = rawStockChange[0]) === null || _e === void 0 ? void 0 : _e.decreaseInStock) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.count) !== null && _h !== void 0 ? _h : 0);
                const totalRawChangeWeight = openingRawStock.weight +
                    ((_m = (_l = (_k = (_j = rawStockChange[0]) === null || _j === void 0 ? void 0 : _j.increaseInStock) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l.weight) !== null && _m !== void 0 ? _m : 0) -
                    ((_r = (_q = (_p = (_o = rawStockChange[0]) === null || _o === void 0 ? void 0 : _o.decreaseInStock) === null || _p === void 0 ? void 0 : _p[0]) === null || _q === void 0 ? void 0 : _q.weight) !== null && _r !== void 0 ? _r : 0);
                const totalGarbageChangeCount = openingGarbageStock.count +
                    ((_v = (_u = (_t = (_s = garbageStockChange[0]) === null || _s === void 0 ? void 0 : _s.increaseInStock) === null || _t === void 0 ? void 0 : _t[0]) === null || _u === void 0 ? void 0 : _u.count) !== null && _v !== void 0 ? _v : 0) -
                    ((_z = (_y = (_x = (_w = garbageStockChange[0]) === null || _w === void 0 ? void 0 : _w.decreaseInStock) === null || _x === void 0 ? void 0 : _x[0]) === null || _y === void 0 ? void 0 : _y.count) !== null && _z !== void 0 ? _z : 0);
                const totalGarbageChangeWeight = openingGarbageStock.weight +
                    ((_3 = (_2 = (_1 = (_0 = garbageStockChange[0]) === null || _0 === void 0 ? void 0 : _0.increaseInStock) === null || _1 === void 0 ? void 0 : _1[0]) === null || _2 === void 0 ? void 0 : _2.weight) !== null && _3 !== void 0 ? _3 : 0) -
                    ((_7 = (_6 = (_5 = (_4 = garbageStockChange[0]) === null || _4 === void 0 ? void 0 : _4.decreaseInStock) === null || _5 === void 0 ? void 0 : _5[0]) === null || _6 === void 0 ? void 0 : _6.weight) !== null && _7 !== void 0 ? _7 : 0);
                const totalFinishedChangeCount = openingFinishedStock.count +
                    ((_11 = (_10 = (_9 = (_8 = finishedStockChange[0]) === null || _8 === void 0 ? void 0 : _8.increaseInStock) === null || _9 === void 0 ? void 0 : _9[0]) === null || _10 === void 0 ? void 0 : _10.count) !== null && _11 !== void 0 ? _11 : 0) -
                    ((_15 = (_14 = (_13 = (_12 = finishedStockChange[0]) === null || _12 === void 0 ? void 0 : _12.decreaseInStock) === null || _13 === void 0 ? void 0 : _13[0]) === null || _14 === void 0 ? void 0 : _14.count) !== null && _15 !== void 0 ? _15 : 0);
                const totalFinishedChangeWeight = openingFinishedStock.weight +
                    ((_19 = (_18 = (_17 = (_16 = finishedStockChange[0]) === null || _16 === void 0 ? void 0 : _16.increaseInStock) === null || _17 === void 0 ? void 0 : _17[0]) === null || _18 === void 0 ? void 0 : _18.weight) !== null && _19 !== void 0 ? _19 : 0) -
                    ((_23 = (_22 = (_21 = (_20 = finishedStockChange[0]) === null || _20 === void 0 ? void 0 : _20.decreaseInStock) === null || _21 === void 0 ? void 0 : _21[0]) === null || _22 === void 0 ? void 0 : _22.weight) !== null && _23 !== void 0 ? _23 : 0);
                if (rawStockChange) {
                    yield this.prisma.stock.update({
                        where: {
                            type: 'raw',
                        },
                        data: {
                            count: totalRawChangeCount,
                            weight: totalRawChangeWeight,
                        },
                    });
                }
                if (garbageStockChange) {
                    yield this.prisma.stock.update({
                        where: {
                            type: 'garbage',
                        },
                        data: {
                            count: totalGarbageChangeCount,
                            weight: totalGarbageChangeWeight,
                        },
                    });
                }
                if (finishedStockChange) {
                    yield this.prisma.stock.update({
                        where: {
                            type: 'finished',
                        },
                        data: {
                            count: totalFinishedChangeCount,
                            weight: totalFinishedChangeWeight,
                        },
                    });
                }
                const result = yield this.prisma.inventory.create({
                    data: {
                        inventory_view: {
                            connect: inventory_view.map((item) => {
                                return {
                                    id: item,
                                };
                            }),
                        },
                        opening_raw: {
                            count: count,
                            weight: openingRawStock.weight,
                            weightUom: openingRawStock.weightUom.type,
                        },
                        opening_garbage: {
                            count: openingGarbageStock.count,
                            weight: openingGarbageStock.weight,
                            weightUom: openingGarbageStock.weightUom
                                .type,
                        },
                        opening_finished: {
                            count: openingFinishedStock.count,
                            weight: openingFinishedStock.weight,
                            weightUom: openingFinishedStock.weightUom
                                .type,
                        },
                        rawChange_after_action: {
                            create: {
                                type: 'raw',
                                IncreaseInStock: ((_25 = (_24 = rawStockChange[0]) === null || _24 === void 0 ? void 0 : _24.increaseInStock) === null || _25 === void 0 ? void 0 : _25.length) > 0
                                    ? {
                                        count: (_28 = (_27 = (_26 = rawStockChange[0]) === null || _26 === void 0 ? void 0 : _26.increaseInStock[0]) === null || _27 === void 0 ? void 0 : _27.count) !== null && _28 !== void 0 ? _28 : 0,
                                        weight: (_31 = (_30 = (_29 = rawStockChange[0]) === null || _29 === void 0 ? void 0 : _29.increaseInStock[0]) === null || _30 === void 0 ? void 0 : _30.weight) !== null && _31 !== void 0 ? _31 : 0,
                                        weightUom: (_34 = (_33 = (_32 = rawStockChange[0]) === null || _32 === void 0 ? void 0 : _32.increaseInStock[0]) === null || _33 === void 0 ? void 0 : _33.weightUom) !== null && _34 !== void 0 ? _34 : null,
                                    }
                                    : undefined,
                                DecreaseInStock: ((_36 = (_35 = rawStockChange[0]) === null || _35 === void 0 ? void 0 : _35.decreaseInStock) === null || _36 === void 0 ? void 0 : _36.length) > 0
                                    ? {
                                        count: (_39 = (_38 = (_37 = rawStockChange[0]) === null || _37 === void 0 ? void 0 : _37.decreaseInStock[0]) === null || _38 === void 0 ? void 0 : _38.count) !== null && _39 !== void 0 ? _39 : 0,
                                        weight: (_42 = (_41 = (_40 = rawStockChange[0]) === null || _40 === void 0 ? void 0 : _40.decreaseInStock[0]) === null || _41 === void 0 ? void 0 : _41.weight) !== null && _42 !== void 0 ? _42 : 0,
                                        weightUom: (_45 = (_44 = (_43 = rawStockChange[0]) === null || _43 === void 0 ? void 0 : _43.decreaseInStock[0]) === null || _44 === void 0 ? void 0 : _44.weightUom) !== null && _45 !== void 0 ? _45 : null,
                                    }
                                    : undefined,
                            },
                        },
                        garbageChange_after_action: {
                            create: {
                                type: 'garbage',
                                IncreaseInStock: ((_47 = (_46 = garbageStockChange[0]) === null || _46 === void 0 ? void 0 : _46.increaseInStock) === null || _47 === void 0 ? void 0 : _47.length) > 0
                                    ? {
                                        count: (_50 = (_49 = (_48 = garbageStockChange[0]) === null || _48 === void 0 ? void 0 : _48.increaseInStock[0]) === null || _49 === void 0 ? void 0 : _49.count) !== null && _50 !== void 0 ? _50 : 0,
                                        weight: (_53 = (_52 = (_51 = garbageStockChange[0]) === null || _51 === void 0 ? void 0 : _51.increaseInStock[0]) === null || _52 === void 0 ? void 0 : _52.weight) !== null && _53 !== void 0 ? _53 : 0,
                                        weightUom: (_56 = (_55 = (_54 = garbageStockChange[0]) === null || _54 === void 0 ? void 0 : _54.increaseInStock[0]) === null || _55 === void 0 ? void 0 : _55.weightUom) !== null && _56 !== void 0 ? _56 : null,
                                    }
                                    : undefined,
                                DecreaseInStock: ((_58 = (_57 = garbageStockChange[0]) === null || _57 === void 0 ? void 0 : _57.decreaseInStock) === null || _58 === void 0 ? void 0 : _58.length) > 0
                                    ? {
                                        count: (_61 = (_60 = (_59 = garbageStockChange[0]) === null || _59 === void 0 ? void 0 : _59.decreaseInStock[0]) === null || _60 === void 0 ? void 0 : _60.count) !== null && _61 !== void 0 ? _61 : 0,
                                        weight: (_64 = (_63 = (_62 = garbageStockChange[0]) === null || _62 === void 0 ? void 0 : _62.decreaseInStock[0]) === null || _63 === void 0 ? void 0 : _63.weight) !== null && _64 !== void 0 ? _64 : 0,
                                        weightUom: (_67 = (_66 = (_65 = garbageStockChange[0]) === null || _65 === void 0 ? void 0 : _65.decreaseInStock[0]) === null || _66 === void 0 ? void 0 : _66.weightUom) !== null && _67 !== void 0 ? _67 : null,
                                    }
                                    : undefined,
                            },
                        },
                        finishedChange_after_action: {
                            create: {
                                type: 'finished',
                                IncreaseInStock: ((_69 = (_68 = finishedStockChange[0]) === null || _68 === void 0 ? void 0 : _68.increaseInStock) === null || _69 === void 0 ? void 0 : _69.length) > 0
                                    ? {
                                        count: finishedStockChange[0]
                                            .increaseInStock[0]
                                            .count,
                                        weight: finishedStockChange[0]
                                            .increaseInStock[0]
                                            .weight,
                                        weightUom: finishedStockChange[0]
                                            .increaseInStock[0]
                                            .weightUom,
                                    }
                                    : undefined,
                                DecreaseInStock: ((_71 = (_70 = finishedStockChange[0]) === null || _70 === void 0 ? void 0 : _70.decreaseInStock) === null || _71 === void 0 ? void 0 : _71.length) > 0
                                    ? {
                                        count: finishedStockChange[0]
                                            .decreaseInStock[0]
                                            .count,
                                        weight: finishedStockChange[0]
                                            .decreaseInStock[0]
                                            .weight,
                                        weightUom: finishedStockChange[0]
                                            .decreaseInStock[0]
                                            .weightUom,
                                    }
                                    : undefined,
                            },
                        },
                        rawStock_after_action: {
                            connect: {
                                type: 'raw',
                            },
                        },
                        garbageStock_after_action: {
                            connect: {
                                type: 'garbage',
                            },
                        },
                        finishedStock_after_action: {
                            connect: {
                                type: 'finished',
                            },
                        },
                    },
                    include: {
                        finishedChange_after_action: true,
                        finishedStock_after_action: true,
                        garbageChange_after_action: true,
                        garbageStock_after_action: true,
                        rawChange_after_action: true,
                        rawStock_after_action: true,
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
InventoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InventoryService);
exports.InventoryService = InventoryService;


/***/ }),
/* 52 */
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
exports.InventoryviewService = void 0;
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(10);
let InventoryviewService = class InventoryviewService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.inventory_view);
        this.prisma = prisma;
    }
    getView() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.prisma.inventory_view.findMany({
                    orderBy: {
                        updatedAt: 'desc',
                    },
                    include: {
                        coating: true,
                        color: true,
                        dimension: true,
                        variant: true,
                        weightUom: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    getViewById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.prisma.inventory_view.findUnique({
                    where: {
                        id,
                    },
                    include: {
                        coating: true,
                        color: true,
                        dimension: true,
                        variant: true,
                        weightUom: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    createView(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type, coatingId, colorId, count, dimensionId, variantId, weight, weightUomId, } = dto;
                return this.prisma.inventory_view.create({
                    data: {
                        type,
                        variantId,
                        coatingId,
                        colorId,
                        dimensionId,
                        weight,
                        count,
                        weightUomId,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    updateView(dto, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type, coatingId, colorId, count, dimensionId, variantId, weight, weightUomId, } = dto;
                return this.prisma.inventory_view.update({
                    where: {
                        id,
                    },
                    data: {
                        type,
                        variantId,
                        coatingId,
                        colorId,
                        dimensionId,
                        weight,
                        count,
                        weightUomId,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
};
InventoryviewService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InventoryviewService);
exports.InventoryviewService = InventoryviewService;


/***/ }),
/* 53 */
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
exports.InventoryDto = exports.ChangedMainStock = void 0;
const openapi = __webpack_require__(6);
const common_decorator_1 = __webpack_require__(22);
class ChangedMainStock {
    static _OPENAPI_METADATA_FACTORY() {
        return { increaseInStock: { required: true, type: () => [Object] }, decreaseInStock: { required: true, type: () => [Object] } };
    }
}
__decorate([
    (0, common_decorator_1.ArrayOptionalValidator)(),
    __metadata("design:type", Array)
], ChangedMainStock.prototype, "increaseInStock", void 0);
__decorate([
    (0, common_decorator_1.ArrayOptionalValidator)(),
    __metadata("design:type", Array)
], ChangedMainStock.prototype, "decreaseInStock", void 0);
exports.ChangedMainStock = ChangedMainStock;
class InventoryDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { inventory_view: { required: true, type: () => [String] }, rawStockChange: { required: true, type: () => [(__webpack_require__(53).ChangedMainStock)] }, garbageStockChange: { required: true, type: () => [(__webpack_require__(53).ChangedMainStock)] }, finishedStockChange: { required: true, type: () => [(__webpack_require__(53).ChangedMainStock)] } };
    }
}
__decorate([
    (0, common_decorator_1.ArrayValidator)(),
    __metadata("design:type", Array)
], InventoryDto.prototype, "inventory_view", void 0);
__decorate([
    (0, common_decorator_1.ArrayOptionalValidator)(),
    __metadata("design:type", Array)
], InventoryDto.prototype, "rawStockChange", void 0);
__decorate([
    (0, common_decorator_1.ArrayOptionalValidator)(),
    __metadata("design:type", Array)
], InventoryDto.prototype, "garbageStockChange", void 0);
__decorate([
    (0, common_decorator_1.ArrayOptionalValidator)(),
    __metadata("design:type", Array)
], InventoryDto.prototype, "finishedStockChange", void 0);
exports.InventoryDto = InventoryDto;


/***/ }),
/* 54 */
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
exports.InventoryViewDto = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const client_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(21);
const common_decorator_1 = __webpack_require__(22);
class InventoryViewDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => Object }, variantId: { required: true, type: () => String }, colorId: { required: true, type: () => String }, coatingId: { required: true, type: () => String }, dimensionId: { required: true, type: () => String }, weight: { required: true, type: () => Number }, weightUomId: { required: true, type: () => String }, count: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.InventoryType),
    __metadata("design:type", String)
], InventoryViewDto.prototype, "type", void 0);
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], InventoryViewDto.prototype, "variantId", void 0);
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], InventoryViewDto.prototype, "colorId", void 0);
__decorate([
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], InventoryViewDto.prototype, "coatingId", void 0);
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], InventoryViewDto.prototype, "dimensionId", void 0);
__decorate([
    (0, common_decorator_1.NumberOptionalValidator)(),
    __metadata("design:type", Number)
], InventoryViewDto.prototype, "weight", void 0);
__decorate([
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], InventoryViewDto.prototype, "weightUomId", void 0);
__decorate([
    (0, common_decorator_1.NumberValidator)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], InventoryViewDto.prototype, "count", void 0);
exports.InventoryViewDto = InventoryViewDto;


/***/ }),
/* 55 */
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
exports.StockDto = void 0;
const openapi = __webpack_require__(6);
const client_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(21);
const common_decorator_1 = __webpack_require__(22);
class StockDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => Object }, weight: { required: true, type: () => Number }, weightUomId: { required: true, type: () => String }, count: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, common_decorator_1.StringValidator)(),
    (0, class_validator_1.IsEnum)(client_1.InventoryType),
    __metadata("design:type", String)
], StockDto.prototype, "type", void 0);
__decorate([
    (0, common_decorator_1.NumberOptionalValidator)(),
    __metadata("design:type", Number)
], StockDto.prototype, "weight", void 0);
__decorate([
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], StockDto.prototype, "weightUomId", void 0);
__decorate([
    (0, common_decorator_1.NumberValidator)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], StockDto.prototype, "count", void 0);
exports.StockDto = StockDto;


/***/ }),
/* 56 */
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
exports.StockActionsDto = exports.ChangedStock = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const client_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(21);
const common_decorator_1 = __webpack_require__(22);
class ChangedStock {
    static _OPENAPI_METADATA_FACTORY() {
        return { weight: { required: true, type: () => Number }, weightUom: { required: true, type: () => String }, count: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, common_decorator_1.NumberOptionalValidator)(),
    __metadata("design:type", Number)
], ChangedStock.prototype, "weight", void 0);
__decorate([
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], ChangedStock.prototype, "weightUom", void 0);
__decorate([
    (0, common_decorator_1.NumberValidator)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ChangedStock.prototype, "count", void 0);
exports.ChangedStock = ChangedStock;
class StockActionsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => Object }, increaseInStock: { required: true, type: () => [(__webpack_require__(56).ChangedStock)] }, decreaseInStock: { required: true, type: () => [(__webpack_require__(56).ChangedStock)] } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.InventoryType),
    __metadata("design:type", String)
], StockActionsDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], StockActionsDto.prototype, "increaseInStock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], StockActionsDto.prototype, "decreaseInStock", void 0);
exports.StockActionsDto = StockActionsDto;


/***/ }),
/* 57 */
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
exports.CustomerDto = void 0;
const openapi = __webpack_require__(6);
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(21);
const common_decorator_1 = __webpack_require__(22);
class CustomerDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, email: { required: true, type: () => String }, phone: { required: true, type: () => String, pattern: "/^[0-9]{10}$/" }, credit_note: { required: true, type: () => String } };
    }
}
__decorate([
    (0, common_decorator_1.StringValidator)(),
    __metadata("design:type", String)
], CustomerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CustomerDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.Matches)(/^[0-9]{10}$/, {
        message: 'Invalid Mobile Number',
    }),
    __metadata("design:type", String)
], CustomerDto.prototype, "phone", void 0);
__decorate([
    (0, common_decorator_1.StringOptionalValidator)(),
    __metadata("design:type", String)
], CustomerDto.prototype, "credit_note", void 0);
exports.CustomerDto = CustomerDto;


/***/ }),
/* 58 */
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
exports.CustomerService = void 0;
const common_1 = __webpack_require__(4);
const crud_service_1 = __webpack_require__(9);
const error_functions_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(10);
let CustomerService = class CustomerService extends crud_service_1.CrudService {
    constructor(prisma) {
        super(prisma.customer);
        this.prisma = prisma;
    }
    getCustomer() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.customer.findMany({
                    orderBy: {
                        updatedAt: 'desc',
                    },
                    include: {
                        purchase_order: true,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    getCustomerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.customer.findUnique({
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
    createCustomer(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.customer.create({
                    data: {
                        name: dto.name,
                        email: dto.email,
                        phone: dto.phone,
                        credit_note: dto.credit_note,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
    updateCustomer(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.customer.update({
                    where: {
                        id,
                    },
                    data: {
                        name: dto.name,
                        email: dto.email,
                        phone: dto.phone,
                        credit_note: dto.credit_note,
                    },
                });
            }
            catch (err) {
                (0, error_functions_1.prismaError)(err);
            }
        });
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CustomerService);
exports.CustomerService = CustomerService;


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