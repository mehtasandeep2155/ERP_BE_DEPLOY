import { InventoryType } from '@prisma/client';
export declare class ChangedStock {
    weight: number;
    weightUom: string;
    count: number;
}
export declare class StockActionsDto {
    type: InventoryType;
    increaseInStock: ChangedStock[];
    decreaseInStock: ChangedStock[];
}
