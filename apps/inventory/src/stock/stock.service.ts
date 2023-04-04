import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'apps/shared/crud-service/crud.service';
import { StockTypeMap } from 'apps/shared/crud-service/models/mapType';
import { prismaError } from 'apps/shared/error-handling/error-functions';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { StockDto } from './dto/stock.dto';

@Injectable()
export class StockService extends CrudService<
  Prisma.StockDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  StockTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.stock);
  }

  async getStock() {
    try {
      return await this.prisma.stock.findMany({
        orderBy: {
          updatedAt: 'desc',
        },
        include: {
          weightUom: true,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }

  async getStockById(id: string) {
    try {
      return await this.prisma.stock.findUnique({
        where: {
          id,
        },
        include: {
          weightUom: true,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }

  async createStock(dto: StockDto) {
    try {
      const { type, weight, count, weightUomId } =
        dto;
      return await this.prisma.stock.create({
        data: {
          type,
          weight,
          count,
          weightUomId,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }

  async updateStock(id: string, dto: StockDto) {
    const { type, count, weight, weightUomId } =
      dto;
    try {
      return await this.prisma.stock.update({
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
    } catch (err) {
      prismaError(err);
    }
  }
}
