import { Prisma } from '@prisma/client';
import { CrudService } from 'apps/shared/crud-service/crud.service';
import { ProductTypeMap } from 'apps/shared/crud-service/models/mapType';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { InventoryDto } from './dto/inventory.dto';
export declare class InventoryService extends CrudService<Prisma.InventoryDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, ProductTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getInventory(): Promise<(import(".prisma/client").Inventory & {
        inventory_view: (import(".prisma/client").Inventory_view & {
            color: import(".prisma/client").Color;
            weightUom: import(".prisma/client").Uom;
            dimension: import(".prisma/client").Product_dimension;
            variant: import(".prisma/client").Product_variant;
            coating: import(".prisma/client").Product_type;
        })[];
        rawChange_after_action: import(".prisma/client").StockActions;
        garbageChange_after_action: import(".prisma/client").StockActions;
        finishedChange_after_action: import(".prisma/client").StockActions;
        rawStock_after_action: import(".prisma/client").Stock;
        garbageStock_after_action: import(".prisma/client").Stock;
        finishedStock_after_action: import(".prisma/client").Stock;
    })[]>;
    getInventoryById(id: string): Promise<import(".prisma/client").Inventory & {
        inventory_view: (import(".prisma/client").Inventory_view & {
            color: import(".prisma/client").Color;
            weightUom: import(".prisma/client").Uom;
            dimension: import(".prisma/client").Product_dimension;
            variant: import(".prisma/client").Product_variant;
            coating: import(".prisma/client").Product_type;
        })[];
        rawChange_after_action: import(".prisma/client").StockActions;
        garbageChange_after_action: import(".prisma/client").StockActions;
        finishedChange_after_action: import(".prisma/client").StockActions;
        rawStock_after_action: import(".prisma/client").Stock;
        garbageStock_after_action: import(".prisma/client").Stock;
        finishedStock_after_action: import(".prisma/client").Stock;
    }>;
    createInventory(dto: InventoryDto): Promise<import(".prisma/client").Inventory & {
        rawChange_after_action: import(".prisma/client").StockActions;
        garbageChange_after_action: import(".prisma/client").StockActions;
        finishedChange_after_action: import(".prisma/client").StockActions;
        rawStock_after_action: import(".prisma/client").Stock;
        garbageStock_after_action: import(".prisma/client").Stock;
        finishedStock_after_action: import(".prisma/client").Stock;
    }>;
}
