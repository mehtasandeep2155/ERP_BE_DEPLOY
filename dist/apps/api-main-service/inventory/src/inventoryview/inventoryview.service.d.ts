import { Prisma } from '@prisma/client';
import { CrudService } from 'apps/shared/crud-service/crud.service';
import { InventoryViewTypeMap } from 'apps/shared/crud-service/models/mapType';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { InventoryViewDto } from './dto/inventoryview.dto';
export declare class InventoryviewService extends CrudService<Prisma.Inventory_viewDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, InventoryViewTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getView(): Promise<(import(".prisma/client").Inventory_view & {
        color: import(".prisma/client").Color;
        weightUom: import(".prisma/client").Uom;
        dimension: import(".prisma/client").Product_dimension;
        variant: import(".prisma/client").Product_variant;
        coating: import(".prisma/client").Product_type;
    })[]>;
    getViewById(id: string): Promise<import(".prisma/client").Inventory_view & {
        color: import(".prisma/client").Color;
        weightUom: import(".prisma/client").Uom;
        dimension: import(".prisma/client").Product_dimension;
        variant: import(".prisma/client").Product_variant;
        coating: import(".prisma/client").Product_type;
    }>;
    createView(dto: InventoryViewDto): Promise<import(".prisma/client").Inventory_view>;
    updateView(dto: InventoryViewDto, id: string): Promise<import(".prisma/client").Inventory_view>;
}
