import { Module } from '@nestjs/common';
import { InventoryviewService } from './inventoryview.service';
import { InventoryviewController } from './inventoryview.controller';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    InventoryviewService,
    PrismaService,
    ConfigService,
  ],
  controllers: [InventoryviewController],
})
export class InventoryviewModule {}
