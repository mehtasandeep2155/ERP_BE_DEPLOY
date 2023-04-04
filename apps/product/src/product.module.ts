import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ColorModule } from './color/color.module';
import { UomModule } from './uom/uom.module';
import { ProductvariantModule } from './productvariant/productvariant.module';
import { ProducttypeModule } from './producttype/producttype.module';
import { ProductdimensionModule } from './productdimension/productdimension.module';
import { RateModule } from './rate/rate.module';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { PurchaseorderModule } from './purchaseorder/purchaseorder.module';
import { ColorService } from './color/color.service';
import { ProductdimensionService } from './productdimension/productdimension.service';
import { ProducttypeService } from './producttype/producttype.service';
import { ProductvariantService } from './productvariant/productvariant.service';
import { PurchaseorderService } from './purchaseorder/purchaseorder.service';
import { RateService } from './rate/rate.service';
import { UomService } from './uom/uom.service';

@Module({
  imports: [
    ColorModule,
    UomModule,
    ProductvariantModule,
    ProducttypeModule,
    ProductdimensionModule,
    RateModule,
    ProductModule,
    PurchaseorderModule,
  ],
  controllers: [ProductController],
  providers: [
    ProductService,
    PrismaService,
    ConfigService,
    ColorService,
    ProductdimensionService,
    ProducttypeService,
    ProductvariantService,
    PurchaseorderService,
    RateService,
    UomService,
  ],
})
export class ProductModule {}
