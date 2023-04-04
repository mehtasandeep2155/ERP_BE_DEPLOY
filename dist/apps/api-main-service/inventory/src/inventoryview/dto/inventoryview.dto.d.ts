import { InventoryType } from '@prisma/client';
export declare class InventoryViewDto {
    type: InventoryType;
    variantId: string;
    colorId: string;
    coatingId: string;
    dimensionId: string;
    weight: number;
    weightUomId: string;
    count: number;
}
