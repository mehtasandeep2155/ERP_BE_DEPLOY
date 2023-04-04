import { InventoryType } from '@prisma/client';
export declare class StockDto {
    type: InventoryType;
    weight: number;
    weightUomId: string;
    count: number;
}
