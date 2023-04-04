import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from '../../shared/crud-service/crud.service';
import { CompanyTypeMap } from '../../shared/crud-service/models/mapType';
import { prismaError } from '../../shared/error-handling/error-functions';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { CompanyDto } from '../dto/company.dto';

@Injectable()
export class CompanyService extends CrudService<
  Prisma.CompanyDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  CompanyTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.company);
  }
  async getCompany() {
    try {
      const record =
        await this.prisma.company.findMany({
          orderBy: {
            updatedAt: 'desc',
          },
          include: {
            sub_company: true,
          },
        });

      return record;
    } catch (err) {
      prismaError(err);
    }
  }

  async getCompanyById(id: string) {
    try {
      return this.prisma.company.findUnique({
        where: {
          id,
        },
        include: {
          sub_company: true,
        },
      });
    } catch (err) {
      prismaError(err);
    }
  }

  async createCompany(dto: CompanyDto) {
    try {
      const record =
        await this.prisma.company.create({
          data: {
            name: dto.name,
            sub_company: {
              connect: dto.subCompanyId.map(
                (item) => {
                  return {
                    id: item,
                  };
                },
              ),
            },
          },
          include: {
            sub_company: true,
          },
        });

      return record;
    } catch (err) {
      prismaError(err);
    }
  }
  async updateCompany(
    id: string,
    dto: CompanyDto,
  ) {
    try {
      const company =
        await this.prisma.company.findUnique({
          where: {
            id,
          },
          select: {
            sub_company: {
              select: {
                id: true,
              },
            },
          },
        });

      let disconnected = [];

      for (const { id } of company.sub_company) {
        if (!dto.subCompanyId.includes(id))
          disconnected.push(id);
      }

      if (disconnected && disconnected.length > 0)
        await this.prisma.company.update({
          where: { id },
          data: {
            name: dto.name,
            sub_company: {
              disconnect: disconnected.map(
                (item) => {
                  return {
                    id: item,
                  };
                },
              ),
            },
          },
        });

      if (
        dto.subCompanyId &&
        dto.subCompanyId.length > 0
      )
        await this.prisma.company.update({
          where: { id },
          data: {
            name: dto.name,
            sub_company: {
              connect: dto.subCompanyId.map(
                (item) => {
                  return {
                    id: item,
                  };
                },
              ),
            },
          },
        });

      const result =
        await this.prisma.company.findUnique({
          where: {
            id,
          },
          include: {
            sub_company: true,
          },
        });

      return result;
    } catch (err) {
      prismaError(err);
    }
  }
}
