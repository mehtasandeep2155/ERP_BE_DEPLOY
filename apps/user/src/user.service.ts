import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from '../../shared/crud-service/crud.service';
import { UserTypeMap } from '../../shared/crud-service/models/mapType';
import { UserCreatedDto } from './dto/userCreated.dto';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { prismaError } from '../../shared/error-handling/error-functions';

@Injectable()
export class UserService extends CrudService<
  Prisma.UserDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  UserTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.user);
  }

  async verifyUser(dto: UserCreatedDto) {
    try {
      const user =
        await this.prisma.user.findUnique({
          where: {
            email: dto.email,
          },
        });

      if (dto.verifyUser)
        await this.prisma.user.update({
          where: {
            email: dto.email,
          },
          data: {
            verified: dto.verifyUser,
          },
        });

      if (dto.role)
        await this.prisma.user.update({
          where: {
            email: dto.email,
          },
          data: {
            role: dto.role,
          },
        });

      if (dto.companyName)
        await this.prisma.user.update({
          where: {
            email: dto.email,
          },
          data: {
            company: {
              connect: {
                name: dto.companyName,
              },
            },
          },
        });

      const moduleData =
        await this.prisma.module.findMany({
          where: { userId: user.id },
        });

      for (const {
        name,
        controls,
      } of moduleData) {
        if (
          !dto?.moduleAccess.some(
            (item2) => item2.name === name,
          )
        ) {
          await this.prisma.module.deleteMany({
            where: {
              AND: [
                {
                  userId: user.id,
                },
                {
                  name,
                },
              ],
            },
          });
        }
      }

      for (const {
        name,
        controls,
      } of dto?.moduleAccess) {
        moduleData.some(
          (item2) => item2.name === name,
        )
          ? await this.prisma.module.updateMany({
              where: {
                AND: [
                  {
                    userId: user.id,
                  },
                  {
                    name,
                  },
                ],
              },
              data: {
                name,
                controls,
                userId: user.id,
              },
            })
          : await this.prisma.module.createMany({
              data: {
                name,
                controls,
                userId: user.id,
              },
            });
      }
      const updatedUser =
        await this.prisma.user.findUnique({
          where: {
            email: dto.email,
          },
          include: {
            modules: true,
            company: {
              include: {
                sub_company: true,
              },
            },
          },
        });
      return updatedUser;
    } catch (err) {
      prismaError(err);
    }
  }

  async getUser() {
    try {
      return await this.prisma.user.findMany({
        orderBy: {
          updatedAt: 'desc',
        },
        include: {
          company: {
            include: {
              sub_company: true,
            },
          },
          modules: true,
        },
      });
    } catch (err) {
      throw err;
    }
  }
}
