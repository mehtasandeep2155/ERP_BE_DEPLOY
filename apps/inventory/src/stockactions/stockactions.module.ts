import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { StockactionsController } from './stockactions.controller';
import { StockactionsService } from './stockactions.service';

@Module({
  controllers: [StockactionsController],
  providers: [StockactionsService,PrismaService,ConfigService]
})
export class StockactionsModule {}
