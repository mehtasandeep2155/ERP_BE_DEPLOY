import { Module } from "@nestjs/common";
import { ApiMainServiceController } from "./api-main-service.controller";
import { ApiMainServiceService } from "./api-main-service.service";
import { UserService } from "apps/user/src/user.service";
import { AuthService } from "apps/user/src/auth/auth.service";
import { PrismaService } from "shared/prisma/prisma.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { CompanyService } from "apps/company/src/company.service";
import { SubcompanyService } from "apps/company/src/subcompany/subcompany.service";
import { ColorService } from "apps/product/src/color/color.service";
import { ProductService } from "apps/product/src/product.service";
import { ProductdimensionService } from "apps/product/src/productdimension/productdimension.service";
import { ProducttypeService } from "apps/product/src/producttype/producttype.service";
import { ProductvariantService } from "apps/product/src/productvariant/productvariant.service";
import { PurchaseorderService } from "apps/product/src/purchaseorder/purchaseorder.service";
import { RateService } from "apps/product/src/rate/rate.service";
import { UomService } from "apps/product/src/uom/uom.service";
import { StockService } from "apps/inventory/src/stock/stock.service";
import { StockactionsService } from "apps/inventory/src/stockactions/stockactions.service";
import { InventoryService } from "apps/inventory/src/inventory.service";
import { InventoryviewService } from "apps/inventory/src/inventoryview/inventoryview.service";
import { CustomerService } from "apps/customer/src/customer.service";

@Module({
  imports: [
    MailerModule.forRoot({
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
    JwtModule.register({}),
  ],
  controllers: [ApiMainServiceController],
  providers: [
    ApiMainServiceService,
    UserService,
    AuthService,
    PrismaService,
    ConfigService,
    CompanyService,
    SubcompanyService,
    ColorService,
    ProductdimensionService,
    ProductvariantService,
    PurchaseorderService,
    ProducttypeService,
    RateService,
    UomService,
    ProductService,
    StockService,
    StockactionsService,
    InventoryService,
    InventoryviewService,
    CustomerService,
  ],
})
export class ApiMainServiceModule {}
