import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'apps/shared/crud-service/crud.service';
import { StockActionsTypeMap } from 'apps/shared/crud-service/models/mapType';
import { prismaError } from 'apps/shared/error-handling/error-functions';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { StockActionsDto } from './dto/stockactions.dto';

@Injectable()
export class StockactionsService extends CrudService<
  Prisma.StockActionsDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  StockActionsTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.stockActions);
  }

  async createActions(dto: StockActionsDto) {
    try {
      const {
        type,
        increaseInStock,
        decreaseInStock,
      } = dto;
      return await this.prisma.stockActions.create(
        {
          data: {
            type: type,
            IncreaseInStock:
              increaseInStock &&
              increaseInStock?.length > 0
                ? {
                    count:
                      increaseInStock[0].count,
                    weight:
                      increaseInStock[0].weight,
                    weightUom:
                      increaseInStock[0]
                        .weightUom,
                  }
                : undefined,
            DecreaseInStock:
              decreaseInStock &&
              decreaseInStock?.length > 0
                ? {
                    count:
                      decreaseInStock[0].count,
                    weight:
                      decreaseInStock[0].weight,
                    weightUom:
                      decreaseInStock[0]
                        .weightUom,
                  }
                : undefined,
          },
        },
      );
    } catch (err) {
      prismaError(err);
    }
  }

  async updateActions(
    id: string,
    dto: StockActionsDto,
  ) {
    try {
      const {
        type,
        increaseInStock,
        decreaseInStock,
      } = dto;
      return await this.prisma.stockActions.update(
        {
          where: {
            id,
          },
          data: {
            type: type,
            IncreaseInStock:
              increaseInStock &&
              increaseInStock?.length > 0
                ? {
                    count:
                      increaseInStock[0].count,
                    weight:
                      increaseInStock[0].weight,
                    weightUom:
                      increaseInStock[0]
                        .weightUom,
                  }
                : undefined,
            DecreaseInStock:
              decreaseInStock &&
              decreaseInStock?.length > 0
                ? {
                    count:
                      decreaseInStock[0].count,
                    weight:
                      decreaseInStock[0].weight,
                    weightUom:
                      decreaseInStock[0]
                        .weightUom,
                  }
                : undefined,
          },
        },
      );
    } catch (err) {
      prismaError(err);
    }
  }
}
