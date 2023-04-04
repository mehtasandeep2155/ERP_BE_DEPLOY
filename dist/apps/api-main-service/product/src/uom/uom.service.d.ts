import { Prisma } from '@prisma/client';
import { CrudService } from '../../../shared/crud-service/crud.service';
import { UomTypeMap } from '../../../shared/crud-service/models/mapType';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { UomDto } from './dto/uom.dto';
export declare class UomService extends CrudService<Prisma.UomDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, UomTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    updateUom(id: string, data: UomDto): Promise<import(".prisma/client").Uom>;
}
