import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'apps/shared/crud-service/crud.service';
import { InventoryViewTypeMap } from 'apps/shared/crud-service/models/mapType';
import { prismaError } from 'apps/shared/error-handling/error-functions';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { InventoryViewDto } from './dto/inventoryview.dto';

@Injectable()
export class InventoryviewService extends CrudService<
  Prisma.Inventory_viewDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  InventoryViewTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.inventory_view);
  }

  async getView() {
    try {
      return this.prisma.inventory_view.findMany({
        orderBy: {
          updatedAt: 'desc',
        },
        include: {
          coating: true,
          color: true,
          dimension: true,
          variant: true,
          weightUom: true,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }

  async getViewById(id: string) {
    try {
      return this.prisma.inventory_view.findUnique(
        {
          where: {
            id,
          },
          include: {
            coating: true,
            color: true,
            dimension: true,
            variant: true,
            weightUom: true,
          },
        },
      );
    } catch (err) {
      prismaError(err);
    }
  }

  async createView(dto: InventoryViewDto) {
    try {
      const {
        type,
        coatingId,
        colorId,
        count,
        dimensionId,
        variantId,
        weight,
        weightUomId,
      } = dto;
      return this.prisma.inventory_view.create({
        data: {
          type,
          variantId,
          coatingId,
          colorId,
          dimensionId,
          weight,
          count,
          weightUomId,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }

  async updateView(
    dto: InventoryViewDto,
    id: string,
  ) {
    try {
      const {
        type,
        coatingId,
        colorId,
        count,
        dimensionId,
        variantId,
        weight,
        weightUomId,
      } = dto;
      return this.prisma.inventory_view.update({
        where: {
          id,
        },
        data: {
          type,
          variantId,
          coatingId,
          colorId,
          dimensionId,
          weight,
          count,
          weightUomId,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }
}
