import { Prisma } from '@prisma/client';
import { CrudService } from 'apps/shared/crud-service/crud.service';
import { StockTypeMap } from 'apps/shared/crud-service/models/mapType';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { StockDto } from './dto/stock.dto';
export declare class StockService extends CrudService<Prisma.StockDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, StockTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getStock(): Promise<(import(".prisma/client").Stock & {
        weightUom: import(".prisma/client").Uom;
    })[]>;
    getStockById(id: string): Promise<import(".prisma/client").Stock & {
        weightUom: import(".prisma/client").Uom;
    }>;
    createStock(dto: StockDto): Promise<import(".prisma/client").Stock>;
    updateStock(id: string, dto: StockDto): Promise<import(".prisma/client").Stock>;
}
