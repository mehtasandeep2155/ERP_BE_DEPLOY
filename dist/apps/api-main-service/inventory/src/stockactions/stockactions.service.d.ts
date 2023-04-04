import { Prisma } from '@prisma/client';
import { CrudService } from 'apps/shared/crud-service/crud.service';
import { StockActionsTypeMap } from 'apps/shared/crud-service/models/mapType';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { StockActionsDto } from './dto/stockactions.dto';
export declare class StockactionsService extends CrudService<Prisma.StockActionsDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, StockActionsTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createActions(dto: StockActionsDto): Promise<import(".prisma/client").StockActions>;
    updateActions(id: string, dto: StockActionsDto): Promise<import(".prisma/client").StockActions>;
}
