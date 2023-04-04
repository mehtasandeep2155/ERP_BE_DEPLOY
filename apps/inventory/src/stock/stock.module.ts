import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';

@Module({
  controllers: [StockController],
  providers: [
    StockService,
    PrismaService,
    ConfigService,
  ],
})
export class StockModule {}
