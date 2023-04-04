import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ColorService } from './color/color.service';
import { ColorDto } from './color/dto/color.dto';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
import { ProductDimensionDto } from './productdimension/dto/product-dimension.dto';
import { ProductdimensionService } from './productdimension/productdimension.service';
import { ProductTypeDto } from './producttype/dto/product-type.dto';
import { ProducttypeService } from './producttype/producttype.service';
import { ProductVariantDto } from './productvariant/dto/productvariant.dto';
import { ProductvariantService } from './productvariant/productvariant.service';
import {
  PurchaseOrderDto,
  VerifyPurchaseOrderDto,
} from './purchaseorder/dto/purchaseorder.dto';
import { PurchaseorderService } from './purchaseorder/purchaseorder.service';
import { RateDto } from './rate/dto/rate.dto';
import { RateService } from './rate/rate.service';
import { UomDto } from './uom/dto/uom.dto';
import { UomService } from './uom/uom.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly colorService: ColorService,
    private readonly productdimensionService: ProductdimensionService,
    private readonly producttypeService: ProducttypeService,
    private readonly productvariantService: ProductvariantService,
    private readonly purchaseorderService: PurchaseorderService,
    private readonly rateService: RateService,
    private readonly uomService: UomService,
  ) {}

  @Get('color')
  async getColor() {
    return await this.colorService.get();
  }

  @Get('color/:id')
  async getById(@Param('id') id: string) {
    return this.colorService.getById(id);
  }

  @Post('color')
  async create(@Body() dto: ColorDto) {
    return await this.colorService.create({
      data: {
        color: dto.color,
      },
    });
  }

  @Patch('color/:id')
  async update(
    @Param('id') id: string,
    @Body() dto: ColorDto,
  ) {
    return await this.colorService.updateColor(
      id,
      dto,
    );
  }

  @Delete('color/:id')
  async deleteColorById(@Param('id') id: string) {
    return this.colorService.delete(id);
  }

  @Get('dimension')
  async get() {
    return await this.productdimensionService.getDimension();
  }

  @Get('dimension/:id')
  async getDimensionById(
    @Param('id') id: string,
  ) {
    return this.productdimensionService.getById(
      id,
    );
  }

  @Post('dimension')
  async createProductDimensions(
    @Body() dto: ProductDimensionDto,
  ) {
    return await this.productdimensionService.createDimensions(
      dto,
    );
  }

  @Patch('dimension/:id')
  async updateProductDimensions(
    @Param('id') id: string,
    @Body() dto: ProductDimensionDto,
  ) {
    return await this.productdimensionService.updateDimensions(
      id,
      dto,
    );
  }

  @Delete('dimension/:id')
  async deleteDimensionById(
    @Param('id') id: string,
  ) {
    return this.productdimensionService.delete(
      id,
    );
  }

  @Get('type')
  async getType() {
    return await this.producttypeService.get();
  }

  @Get('type/:id')
  async getTypeById(@Param('id') id: string) {
    return this.producttypeService.getById(id);
  }

  @Post('type')
  async createProductType(
    @Body() dto: ProductTypeDto,
  ) {
    return await this.producttypeService.createProductType(
      dto,
    );
  }

  @Patch('type/:id')
  async updateType(
    @Param('id') id: string,
    @Body() dto: ProductTypeDto,
  ) {
    return await this.producttypeService.updateType(
      id,
      dto,
    );
  }

  @Delete('type/:id')
  async deleteTypeById(@Param('id') id: string) {
    return this.producttypeService.delete(id);
  }

  @Get('variant')
  async getVariants() {
    return this.productvariantService.getVariant();
  }

  @Get('variant/:id')
  async getVariantById(@Param('id') id: string) {
    return this.productvariantService.getVariantById(
      id,
    );
  }

  @Post('variant')
  async createProductVariant(
    @Body() dto: ProductVariantDto,
  ) {
    return this.productvariantService.createProductVariant(
      dto,
    );
  }

  @Patch('variant/:id')
  async updateProductVariant(
    @Param('id') id: string,
    @Body() dto: ProductVariantDto,
  ) {
    return this.productvariantService.updateProductVariant(
      id,
      dto,
    );
  }

  @Delete('variant/:id')
  async deleteProductVariant(
    @Param('id') id: string,
  ) {
    return this.productvariantService.delete(id);
  }

  @Get('purchase-order')
  async getPurchaseOrder() {
    return this.purchaseorderService.getPurchaseOrder();
  }

  @Get('purchase-order/:id')
  async getPurchaseOrderById(
    @Param('id') id: string,
  ) {
    return this.purchaseorderService.getPurchaseOrderById(
      id,
    );
  }

  @Post('purchase-order')
  async createPurchaseOrder(
    @Body() dto: PurchaseOrderDto,
  ) {
    return this.purchaseorderService.createPurchaseOrder(
      dto,
    );
  }

  @Patch('purchase-order/:id')
  async updatePurchaseOrder(
    @Param('id') id: string,
    @Body() dto: PurchaseOrderDto,
  ) {
    return this.purchaseorderService.updatePurchaseOrder(
      id,
      dto,
    );
  }

  @Patch('verify-po/:id')
  async verifyPurchaseOrder(
    @Param('id') id: string,
    @Body() dto: VerifyPurchaseOrderDto,
  ) {
    return this.purchaseorderService.verifyPurchaseOrder(
      id,
      dto,
    );
  }

  @Delete('purchase-order/:id')
  async deletePurchaseOrder(
    @Param('id') id: string,
  ) {
    return this.purchaseorderService.delete(id);
  }

  @Get('rate')
  async getRate() {
    return this.rateService.getRate();
  }

  @Get('rate/:id')
  async getRateById(@Param('id') id: string) {
    return this.rateService.getRateById(id);
  }

  @Post('rate')
  async createRate(@Body() dto: RateDto) {
    return this.rateService.createRate(dto);
  }

  @Patch('rate/:id')
  async updateRate(
    @Param('id') id: string,
    @Body() dto: RateDto,
  ) {
    return this.rateService.updateRate(id, dto);
  }

  @Delete('rate/:id')
  async deleteRateById(@Param('id') id: string) {
    return this.rateService.delete(id);
  }

  @Get('uom')
  async getUom() {
    return await this.uomService.get();
  }

  @Get('uom/:id')
  async getUomById(@Param('id') id: string) {
    return this.uomService.getById(id);
  }

  @Post('uom')
  async createUom(@Body() dto: UomDto) {
    return await this.uomService.create({
      data: {
        type: dto.type,
      },
    });
  }

  @Patch('uom/:id')
  async updateUom(
    @Param('id') id: string,
    @Body() dto: UomDto,
  ) {
    return await this.uomService.updateUom(
      id,
      dto,
    );
  }

  @Delete('uom/:id')
  async deleteById(@Param('id') id: string) {
    return this.uomService.delete(id);
  }

  @Get('product')
  async getProducts() {
    return this.productService.getProduct();
  }

  @Get('product/:id')
  async getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Post('product')
  async createProduct(@Body() dto: ProductDto) {
    return this.productService.createProduct(dto);
  }

  @Patch('product/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() dto: ProductDto,
  ) {
    return this.productService.updateProduct(
      id,
      dto,
    );
  }

  @Delete('product/:id')
  async deleteProduct(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
