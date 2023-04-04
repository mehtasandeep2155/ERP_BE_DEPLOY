import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'apps/shared/crud-service/crud.service';
import { ProductTypeMap } from 'apps/shared/crud-service/models/mapType';
import { prismaError } from 'apps/shared/error-handling/error-functions';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { InventoryDto } from './dto/inventory.dto';

@Injectable()
export class InventoryService extends CrudService<
  Prisma.InventoryDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  ProductTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.inventory);
  }

  async getInventory() {
    try {
      return await this.prisma.inventory.findMany(
        {
          orderBy: {
            updatedAt: 'desc',
          },
          include: {
            inventory_view: {
              include: {
                coating: true,
                color: true,
                dimension: true,
                variant: true,
                weightUom: true,
              },
            },
            finishedChange_after_action: true,
            finishedStock_after_action: true,
            garbageChange_after_action: true,
            garbageStock_after_action: true,
            rawChange_after_action: true,
            rawStock_after_action: true,
          },
        },
      );
    } catch (err) {
      prismaError(err);
    }
  }

  async getInventoryById(id: string) {
    try {
      return await this.prisma.inventory.findUnique(
        {
          where: {
            id,
          },
          include: {
            inventory_view: {
              include: {
                coating: true,
                color: true,
                dimension: true,
                variant: true,
                weightUom: true,
              },
            },
            finishedChange_after_action: true,
            finishedStock_after_action: true,
            garbageChange_after_action: true,
            garbageStock_after_action: true,
            rawChange_after_action: true,
            rawStock_after_action: true,
          },
        },
      );
    } catch (err) {
      prismaError(err);
    }
  }

  async createInventory(dto: InventoryDto) {
    try {
      const {
        inventory_view,
        rawStockChange,
        garbageStockChange,
        finishedStockChange,
      } = dto;
      const openingStock =
        await this.prisma.stock.findMany({
          include: { weightUom: true },
        });
      const openingRawStock = openingStock.find(
        (item) => item.type === 'raw',
      );
      const { count } = openingRawStock;
      const openingGarbageStock =
        openingStock.find(
          (item) => item.type === 'garbage',
        );
      const openingFinishedStock =
        openingStock.find(
          (item) => item.type === 'finished',
        );

      const totalRawChangeCount =
        openingRawStock.count +
        (rawStockChange[0]?.increaseInStock?.[0]
          ?.count ?? 0) -
        (rawStockChange[0]?.decreaseInStock?.[0]
          ?.count ?? 0);
      const totalRawChangeWeight =
        openingRawStock.weight +
        (rawStockChange[0]?.increaseInStock?.[0]
          ?.weight ?? 0) -
        (rawStockChange[0]?.decreaseInStock?.[0]
          ?.weight ?? 0);
      const totalGarbageChangeCount =
        openingGarbageStock.count +
        (garbageStockChange[0]
          ?.increaseInStock?.[0]?.count ?? 0) -
        (garbageStockChange[0]
          ?.decreaseInStock?.[0]?.count ?? 0);
      const totalGarbageChangeWeight =
        openingGarbageStock.weight +
        (garbageStockChange[0]
          ?.increaseInStock?.[0]?.weight ?? 0) -
        (garbageStockChange[0]
          ?.decreaseInStock?.[0]?.weight ?? 0);
      const totalFinishedChangeCount =
        openingFinishedStock.count +
        (finishedStockChange[0]
          ?.increaseInStock?.[0]?.count ?? 0) -
        (finishedStockChange[0]
          ?.decreaseInStock?.[0]?.count ?? 0);
      const totalFinishedChangeWeight =
        openingFinishedStock.weight +
        (finishedStockChange[0]
          ?.increaseInStock?.[0]?.weight ?? 0) -
        (finishedStockChange[0]
          ?.decreaseInStock?.[0]?.weight ?? 0);
      if (rawStockChange) {
        await this.prisma.stock.update({
          where: {
            type: 'raw',
          },
          data: {
            count: totalRawChangeCount,
            weight: totalRawChangeWeight,
          },
        });
      }

      if (garbageStockChange) {
        await this.prisma.stock.update({
          where: {
            type: 'garbage',
          },
          data: {
            count: totalGarbageChangeCount,
            weight: totalGarbageChangeWeight,
          },
        });
      }

      if (finishedStockChange) {
        await this.prisma.stock.update({
          where: {
            type: 'finished',
          },
          data: {
            count: totalFinishedChangeCount,
            weight: totalFinishedChangeWeight,
          },
        });
      }

      const result =
        await this.prisma.inventory.create({
          data: {
            inventory_view: {
              connect: inventory_view.map(
                (item) => {
                  return {
                    id: item,
                  };
                },
              ),
            },
            opening_raw: {
              count: count,
              weight: openingRawStock.weight,
              weightUom:
                openingRawStock.weightUom.type,
            },
            opening_garbage: {
              count: openingGarbageStock.count,
              weight: openingGarbageStock.weight,
              weightUom:
                openingGarbageStock.weightUom
                  .type,
            },
            opening_finished: {
              count: openingFinishedStock.count,
              weight: openingFinishedStock.weight,
              weightUom:
                openingFinishedStock.weightUom
                  .type,
            },
            rawChange_after_action: {
              create: {
                type: 'raw',
                IncreaseInStock:
                  rawStockChange[0]
                    ?.increaseInStock?.length > 0
                    ? {
                        count:
                          rawStockChange[0]
                            ?.increaseInStock[0]
                            ?.count ?? 0,
                        weight:
                          rawStockChange[0]
                            ?.increaseInStock[0]
                            ?.weight ?? 0,
                        weightUom:
                          rawStockChange[0]
                            ?.increaseInStock[0]
                            ?.weightUom ?? null,
                      }
                    : undefined,
                DecreaseInStock:
                  rawStockChange[0]
                    ?.decreaseInStock?.length > 0
                    ? {
                        count:
                          rawStockChange[0]
                            ?.decreaseInStock[0]
                            ?.count ?? 0,
                        weight:
                          rawStockChange[0]
                            ?.decreaseInStock[0]
                            ?.weight ?? 0,
                        weightUom:
                          rawStockChange[0]
                            ?.decreaseInStock[0]
                            ?.weightUom ?? null,
                      }
                    : undefined,
              },
            },
            garbageChange_after_action: {
              create: {
                type: 'garbage',
                IncreaseInStock:
                  garbageStockChange[0]
                    ?.increaseInStock?.length > 0
                    ? {
                        count:
                          garbageStockChange[0]
                            ?.increaseInStock[0]
                            ?.count ?? 0,
                        weight:
                          garbageStockChange[0]
                            ?.increaseInStock[0]
                            ?.weight ?? 0,
                        weightUom:
                          garbageStockChange[0]
                            ?.increaseInStock[0]
                            ?.weightUom ?? null,
                      }
                    : undefined,
                DecreaseInStock:
                  garbageStockChange[0]
                    ?.decreaseInStock?.length > 0
                    ? {
                        count:
                          garbageStockChange[0]
                            ?.decreaseInStock[0]
                            ?.count ?? 0,
                        weight:
                          garbageStockChange[0]
                            ?.decreaseInStock[0]
                            ?.weight ?? 0,
                        weightUom:
                          garbageStockChange[0]
                            ?.decreaseInStock[0]
                            ?.weightUom ?? null,
                      }
                    : undefined,
              },
            },
            finishedChange_after_action: {
              create: {
                type: 'finished',
                IncreaseInStock:
                  finishedStockChange[0]
                    ?.increaseInStock?.length > 0
                    ? {
                        count:
                          finishedStockChange[0]
                            .increaseInStock[0]
                            .count,
                        weight:
                          finishedStockChange[0]
                            .increaseInStock[0]
                            .weight,
                        weightUom:
                          finishedStockChange[0]
                            .increaseInStock[0]
                            .weightUom,
                      }
                    : undefined,
                DecreaseInStock:
                  finishedStockChange[0]
                    ?.decreaseInStock?.length > 0
                    ? {
                        count:
                          finishedStockChange[0]
                            .decreaseInStock[0]
                            .count,
                        weight:
                          finishedStockChange[0]
                            .decreaseInStock[0]
                            .weight,
                        weightUom:
                          finishedStockChange[0]
                            .decreaseInStock[0]
                            .weightUom,
                      }
                    : undefined,
              },
            },
            rawStock_after_action: {
              connect: {
                type: 'raw',
              },
            },
            garbageStock_after_action: {
              connect: {
                type: 'garbage',
              },
            },
            finishedStock_after_action: {
              connect: {
                type: 'finished',
              },
            },
          },
          include: {
            finishedChange_after_action: true,
            finishedStock_after_action: true,
            garbageChange_after_action: true,
            garbageStock_after_action: true,
            rawChange_after_action: true,
            rawStock_after_action: true,
          },
        });

      return result;
    } catch (err) {
      prismaError(err);
    }
  }
}
