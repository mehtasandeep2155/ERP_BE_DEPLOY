import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'apps/shared/crud-service/crud.service';
import { CustomerTypeMap } from 'apps/shared/crud-service/models/mapType';
import { prismaError } from 'apps/shared/error-handling/error-functions';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService extends CrudService<
  Prisma.CustomerDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  CustomerTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.customer);
  }

  async getCustomer() {
    try {
      return await this.prisma.customer.findMany({
        orderBy: {
          updatedAt: 'desc',
        },
        include: {
          purchase_order: true,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }

  async getCustomerById(id: string) {
    try {
      return await this.prisma.customer.findUnique(
        {
          where: {
            id,
          },
        },
      );
    } catch (err) {
      prismaError(err);
    }
  }

  async createCustomer(dto: CustomerDto) {
    try {
      return await this.prisma.customer.create({
        data: {
          name: dto.name,
          email: dto.email,
          phone: dto.phone,
          credit_note: dto.credit_note,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }

  async updateCustomer(
    id: string,
    dto: CustomerDto,
  ) {
    try {
      return await this.prisma.customer.update({
        where: {
          id,
        },
        data: {
          name: dto.name,
          email: dto.email,
          phone: dto.phone,
          credit_note: dto.credit_note,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }
}
