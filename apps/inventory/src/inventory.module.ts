import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { InventoryviewModule } from './inventoryview/inventoryview.module';
import { InventoryviewService } from './inventoryview/inventoryview.service';
import { StockModule } from './stock/stock.module';
import { StockService } from './stock/stock.service';
import { StockactionsModule } from './stockactions/stockactions.module';
import { StockactionsService } from './stockactions/stockactions.service';

@Module({
  controllers: [InventoryController],
  providers: [
    InventoryService,
    PrismaService,
    ConfigService,
    InventoryviewService,
    StockService,
    StockactionsService,
  ],
  imports: [
    InventoryviewModule,
    StockModule,
    StockactionsModule,
  ],
})
export class InventoryModule {}
