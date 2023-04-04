import { Prisma } from '@prisma/client';
import { CrudService } from '../../../shared/crud-service/crud.service';
import { SubCompanyTypeMap } from '../../../shared/crud-service/models/mapType';
import { PrismaService } from '../../../shared/prisma/prisma.service';
export declare class SubcompanyService extends CrudService<Prisma.Sub_companyDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, SubCompanyTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
}
