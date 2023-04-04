import { Prisma } from '@prisma/client';
import { CrudService } from '../../../shared/crud-service/crud.service';
import { PurchaseOrderTypeMap } from '../../../shared/crud-service/models/mapType';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { PurchaseOrderDto, VerifyPurchaseOrderDto } from './dto/purchaseorder.dto';
export declare class PurchaseorderService extends CrudService<Prisma.Purchase_orderDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, PurchaseOrderTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getPurchaseOrder(): Promise<(import(".prisma/client").Purchase_order & {
        products: (import(".prisma/client").Product & {
            user: import(".prisma/client").User;
            rate: import(".prisma/client").Rate & {
                color: import(".prisma/client").Color;
                type: import(".prisma/client").Product_type;
                dimension: import(".prisma/client").Product_dimension;
                variant: import(".prisma/client").Product_variant;
            };
            weightUom: import(".prisma/client").Uom;
        })[];
        customer_info: import(".prisma/client").Customer;
    })[]>;
    getPurchaseOrderById(id: string): Promise<import(".prisma/client").Purchase_order & {
        products: (import(".prisma/client").Product & {
            user: import(".prisma/client").User;
            rate: import(".prisma/client").Rate & {
                color: import(".prisma/client").Color;
                type: import(".prisma/client").Product_type;
                dimension: import(".prisma/client").Product_dimension;
                variant: import(".prisma/client").Product_variant;
            };
            weightUom: import(".prisma/client").Uom;
        })[];
        customer_info: import(".prisma/client").Customer;
    }>;
    createPurchaseOrder(dto: PurchaseOrderDto): Promise<import(".prisma/client").Purchase_order & {
        products: import(".prisma/client").Product[];
        customer_info: import(".prisma/client").Customer;
    }>;
    updatePurchaseOrder(id: string, dto: PurchaseOrderDto): Promise<import(".prisma/client").Purchase_order & {
        products: import(".prisma/client").Product[];
        customer_info: import(".prisma/client").Customer;
    }>;
    verifyPurchaseOrder(id: string, dto: VerifyPurchaseOrderDto): Promise<import(".prisma/client").Purchase_order>;
}
