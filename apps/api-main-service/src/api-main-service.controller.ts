import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
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
import { SubcompanyService } from "apps/company/src/subcompany/subcompany.service";
import { CompanyService } from "apps/company/src/company.service";
import { SubCompanyDto } from "apps/company/src/subcompany/dto/subcompany.dto";
import { CompanyDto } from "apps/company/dto/company.dto";
import { ColorService } from "apps/product/src/color/color.service";
import { ColorDto } from "apps/product/src/color/dto/color.dto";
import { ProductDto } from "apps/product/src/dto/product.dto";
import { ProductDimensionDto } from "apps/product/src/productdimension/dto/product-dimension.dto";
import { ProductTypeDto } from "apps/product/src/producttype/dto/product-type.dto";
import { ProductVariantDto } from "apps/product/src/productvariant/dto/productvariant.dto";
import {
  PurchaseOrderDto,
  VerifyPurchaseOrderDto,
} from "apps/product/src/purchaseorder/dto/purchaseorder.dto";
import { RateDto } from "apps/product/src/rate/dto/rate.dto";
import { UomDto } from "apps/product/src/uom/dto/uom.dto";
import { ProductdimensionService } from "apps/product/src/productdimension/productdimension.service";
import { ProductvariantService } from "apps/product/src/productvariant/productvariant.service";
import { PurchaseorderService } from "apps/product/src/purchaseorder/purchaseorder.service";
import { ProducttypeService } from "apps/product/src/producttype/producttype.service";
import { RateService } from "apps/product/src/rate/rate.service";
import { UomService } from "apps/product/src/uom/uom.service";
import { ProductService } from "apps/product/src/product.service";
import { InventoryDto } from "apps/inventory/src/dto/inventory.dto";
import { InventoryViewDto } from "apps/inventory/src/inventoryview/dto/inventoryview.dto";
import { StockDto } from "apps/inventory/src/stock/dto/stock.dto";
import { StockActionsDto } from "apps/inventory/src/stockactions/dto/stockactions.dto";
import { InventoryviewService } from "apps/inventory/src/inventoryview/inventoryview.service";
import { InventoryService } from "apps/inventory/src/inventory.service";
import { StockService } from "apps/inventory/src/stock/stock.service";
import { StockactionsService } from "apps/inventory/src/stockactions/stockactions.service";
import { CustomerDto } from "apps/customer/src/dto/customer.dto";
import { CustomerService } from "apps/customer/src/customer.service";

@Controller()
export class ApiMainServiceController {
  constructor(
    private readonly apiMainServiceService: ApiMainServiceService,
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly subcompanyService: SubcompanyService,
    private readonly companyService: CompanyService,
    private readonly colorService: ColorService,
    private readonly productdimensionService: ProductdimensionService,
    private readonly productvariantService: ProductvariantService,
    private readonly purchaseorderService: PurchaseorderService,
    private readonly producttypeService: ProducttypeService,
    private readonly rateService: RateService,
    private readonly uomService: UomService,
    private readonly productService: ProductService,
    private readonly stockService: StockService,
    private readonly stockActionsService: StockactionsService,
    private readonly inventoryviewService: InventoryviewService,
    private readonly inventoryService: InventoryService,
    private readonly customerService: CustomerService
  ) {}

  @Get()
  getHello(): object[] {
    return this.apiMainServiceService.getAll();
  }

  // user
  @Get("user/get-user")
  getUserApi() {
    return this.userService.getUser();
  }

  @Post("user/signup")
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post("user/signin")
  signin(@Body() dto: AuthSignInDto) {
    return this.authService.signin(dto);
  }

  @Patch("user/forgot-password")
  forgotPassword(@Body() dto: PasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @Patch("user/reset-password")
  resetPassword(@Body() dto: ResetPassDto) {
    return this.authService.resetPassword(dto);
  }

  @Patch("user/handle-user")
  verifyUser(@Body() dto: UserCreatedDto) {
    return this.userService.verifyUser(dto);
  }

  // company
  @Get("company/subcompany")
  async getSubCompanies() {
    return this.subcompanyService.get();
  }

  @Get("company/subcompany/:id")
  async getSubCompany(@Param("id") id: string) {
    return this.subcompanyService.getById(id);
  }

  @Post("company/subcompany")
  async createSubCompany(@Body() dto: SubCompanyDto) {
    return this.subcompanyService.create({
      data: {
        ...dto,
      },
    });
  }

  @Patch("company/subcompany/:id")
  async updateSubCompany(@Param("id") id: string, @Body() dto: SubCompanyDto) {
    return this.subcompanyService.update(id, dto);
  }

  @Delete("company/subcompany/:id")
  async deleteSubCompany(@Param("id") id: string) {
    return this.subcompanyService.delete(id);
  }

  @Get("company/company")
  async getCompanies() {
    return this.companyService.getCompany();
  }

  @Get("company/company/:id")
  async getCompany(@Param("id") id: string) {
    return this.companyService.getCompanyById(id);
  }

  @Post("company/company")
  async createCompany(@Body() dto: CompanyDto) {
    return this.companyService.createCompany(dto);
  }

  @Patch("company/company/:id")
  async updateCompany(@Param("id") id: string, @Body() dto: CompanyDto) {
    return this.companyService.updateCompany(id, dto);
  }

  @Delete("company/company/:id")
  async deleteCompany(@Param("id") id: string) {
    return this.companyService.delete(id);
  }

  // product
  @Get("product/color")
  async getColor() {
    return await this.colorService.get();
  }

  @Get("product/color/:id")
  async getById(@Param("id") id: string) {
    return this.colorService.getById(id);
  }

  @Post("product/color")
  async create(@Body() dto: ColorDto) {
    return await this.colorService.create({
      data: {
        color: dto.color,
      },
    });
  }

  @Patch("product/color/:id")
  async update(@Param("id") id: string, @Body() dto: ColorDto) {
    return await this.colorService.updateColor(id, dto);
  }

  @Delete("product/color/:id")
  async deleteColorById(@Param("id") id: string) {
    return this.colorService.delete(id);
  }

  @Get("product/dimension")
  async get() {
    return await this.productdimensionService.getDimension();
  }

  @Get("product/dimension/:id")
  async getDimensionById(@Param("id") id: string) {
    return this.productdimensionService.getById(id);
  }

  @Post("product/dimension")
  async createProductDimensions(@Body() dto: ProductDimensionDto) {
    return await this.productdimensionService.createDimensions(dto);
  }

  @Patch("product/dimension/:id")
  async updateProductDimensions(
    @Param("id") id: string,
    @Body() dto: ProductDimensionDto
  ) {
    return await this.productdimensionService.updateDimensions(id, dto);
  }

  @Delete("product/dimension/:id")
  async deleteDimensionById(@Param("id") id: string) {
    return this.productdimensionService.delete(id);
  }

  @Get("product/type")
  async getType() {
    return await this.producttypeService.get();
  }

  @Get("product/type/:id")
  async getTypeById(@Param("id") id: string) {
    return this.producttypeService.getById(id);
  }

  @Post("product/type")
  async createProductType(@Body() dto: ProductTypeDto) {
    return await this.producttypeService.createProductType(dto);
  }

  @Patch("product/type/:id")
  async updateType(@Param("id") id: string, @Body() dto: ProductTypeDto) {
    return await this.producttypeService.updateType(id, dto);
  }

  @Delete("product/type/:id")
  async deleteTypeById(@Param("id") id: string) {
    return this.producttypeService.delete(id);
  }

  @Get("product/variant")
  async getVariants() {
    return this.productvariantService.getVariant();
  }

  @Get("product/variant/:id")
  async getVariantById(@Param("id") id: string) {
    return this.productvariantService.getVariantById(id);
  }

  @Post("product/variant")
  async createProductVariant(@Body() dto: ProductVariantDto) {
    return this.productvariantService.createProductVariant(dto);
  }

  @Patch("product/variant/:id")
  async updateProductVariant(
    @Param("id") id: string,
    @Body() dto: ProductVariantDto
  ) {
    return this.productvariantService.updateProductVariant(id, dto);
  }

  @Delete("product/variant/:id")
  async deleteProductVariant(@Param("id") id: string) {
    return this.productvariantService.delete(id);
  }

  @Get("product/purchase-order")
  async getPurchaseOrder() {
    return this.purchaseorderService.getPurchaseOrder();
  }

  @Get("product/purchase-order/:id")
  async getPurchaseOrderById(@Param("id") id: string) {
    return this.purchaseorderService.getPurchaseOrderById(id);
  }

  @Post("product/purchase-order")
  async createPurchaseOrder(@Body() dto: PurchaseOrderDto) {
    return this.purchaseorderService.createPurchaseOrder(dto);
  }

  @Patch("product/purchase-order/:id")
  async updatePurchaseOrder(
    @Param("id") id: string,
    @Body() dto: PurchaseOrderDto
  ) {
    return this.purchaseorderService.updatePurchaseOrder(id, dto);
  }

  @Patch("product/verify-po/:id")
  async verifyPurchaseOrder(
    @Param("id") id: string,
    @Body() dto: VerifyPurchaseOrderDto
  ) {
    return this.purchaseorderService.verifyPurchaseOrder(id, dto);
  }

  @Delete("product/purchase-order/:id")
  async deletePurchaseOrder(@Param("id") id: string) {
    return this.purchaseorderService.delete(id);
  }

  @Get("product/rate")
  async getRate() {
    return this.rateService.getRate();
  }

  @Get("product/rate/:id")
  async getRateById(@Param("id") id: string) {
    return this.rateService.getRateById(id);
  }

  @Post("product/rate")
  async createRate(@Body() dto: RateDto) {
    return this.rateService.createRate(dto);
  }

  @Patch("product/rate/:id")
  async updateRate(@Param("id") id: string, @Body() dto: RateDto) {
    return this.rateService.updateRate(id, dto);
  }

  @Delete("product/rate/:id")
  async deleteRateById(@Param("id") id: string) {
    return this.rateService.delete(id);
  }

  @Get("product/uom")
  async getUom() {
    return await this.uomService.get();
  }

  @Get("product/uom/:id")
  async getUomById(@Param("id") id: string) {
    return this.uomService.getById(id);
  }

  @Post("product/uom")
  async createUom(@Body() dto: UomDto) {
    return await this.uomService.create({
      data: {
        type: dto.type,
      },
    });
  }

  @Patch("product/uom/:id")
  async updateUom(@Param("id") id: string, @Body() dto: UomDto) {
    return await this.uomService.updateUom(id, dto);
  }

  @Delete("product/uom/:id")
  async deleteById(@Param("id") id: string) {
    return this.uomService.delete(id);
  }

  @Get("product/product")
  async getProducts() {
    return this.productService.getProduct();
  }

  @Get("product/product/:id")
  async getProductById(@Param("id") id: string) {
    return this.productService.getProductById(id);
  }

  @Post("product/product")
  async createProduct(@Body() dto: ProductDto) {
    return this.productService.createProduct(dto);
  }

  @Patch("product/product/:id")
  async updateProduct(@Param("id") id: string, @Body() dto: ProductDto) {
    return this.productService.updateProduct(id, dto);
  }

  @Delete("product/product/:id")
  async deleteProduct(@Param("id") id: string) {
    return this.productService.delete(id);
  }

  // inventory
  @Get("inventory/view")
  async getView() {
    return this.inventoryviewService.getView();
  }

  @Get("inventory/view/:id")
  async getViewById(@Param("id") id: string) {
    return this.inventoryviewService.getViewById(id);
  }

  @Post("inventory/view")
  async createView(@Body() dto: InventoryViewDto) {
    return this.inventoryviewService.createView(dto);
  }

  @Patch("inventory/view/:id")
  async updateView(@Body() dto: InventoryViewDto, @Param("id") id: string) {
    return this.inventoryviewService.updateView(dto, id);
  }

  @Delete("inventory/view/:id")
  async deleteView(@Param("id") id: string) {
    return this.inventoryviewService.delete(id);
  }

  @Get("inventory/stock")
  async getStock() {
    return this.stockService.getStock();
  }

  @Get("inventory/stock/:id")
  async getStockById(@Param("id") id: string) {
    return this.stockService.getStockById(id);
  }

  @Post("inventory/stock")
  async createStock(@Body() dto: StockDto) {
    return this.stockService.createStock(dto);
  }

  @Patch("inventory/stock/:id")
  async updateStock(@Param("id") id: string, @Body() dto: StockDto) {
    return this.stockService.updateStock(id, dto);
  }

  @Delete("inventory/stock/:id")
  async deleteStock(@Param("id") id: string) {
    return this.stockService.delete(id);
  }

  @Get("inventory/stock-actions")
  async getAction() {
    return this.stockActionsService.get();
  }

  @Get("inventory/stock-actions/:id")
  async getActionById(@Param("id") id: string) {
    return this.stockActionsService.getById(id);
  }

  @Post("inventory/stock-actions")
  async createActions(@Body() dto: StockActionsDto) {
    return this.stockActionsService.createActions(dto);
  }

  @Patch("inventory/stock-actions/:id")
  async updateActions(@Param("id") id: string, @Body() dto: StockActionsDto) {
    return this.stockActionsService.updateActions(id, dto);
  }

  @Delete("inventory/stock-actions/:id")
  async deleteActions(@Param("id") id: string) {
    return this.stockActionsService.delete(id);
  }

  @Get("inventory/inventory")
  async getInventory() {
    return this.inventoryService.getInventory();
  }

  @Get("inventory/inventory/:id")
  async getInventoryById(@Param("id") id: string) {
    return this.inventoryService.getInventoryById(id);
  }

  @Post("inventory/inventory")
  async createInventory(@Body() dto: InventoryDto) {
    return this.inventoryService.createInventory(dto);
  }

  @Delete("inventory/inventory/:id")
  async deleteInventory(@Param("id") id: string) {
    return this.inventoryService.delete(id);
  }

  // customer
  @Get("customer/customer")
  getCustomer() {
    return this.customerService.getCustomer();
  }

  @Get("customer/customer/:id")
  getCustomerById(@Param("id") id: string) {
    return this.customerService.getCustomerById(id);
  }

  @Post("customer/customer")
  createCustomer(@Body() dto: CustomerDto) {
    return this.customerService.createCustomer(dto);
  }

  @Patch("customer/customer/:id")
  updateCustomer(@Param("id") id: string, @Body() dto: CustomerDto) {
    return this.customerService.updateCustomer(id, dto);
  }

  @Delete("customer/customer/:id")
  deleteCustomer(@Param("id") id: string) {
    return this.customerService.delete(id);
  }
}
