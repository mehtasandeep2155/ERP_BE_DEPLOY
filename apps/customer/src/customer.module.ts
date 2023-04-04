import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [
    CustomerService,
    PrismaService,
    ConfigService,
  ],
})
export class CustomerModule {}
