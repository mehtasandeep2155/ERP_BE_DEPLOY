import { POStatus } from '@prisma/client';
export declare class PurchaseOrderDto {
    products: Array<string>;
    challan_number: number;
    order_number: number;
    customer_id: string;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    credit_note: string;
    has_raw_material: boolean;
    cost_per_kg: number;
    coating_discount: number;
    tax: number;
}
export declare class VerifyPurchaseOrderDto {
    status: POStatus;
}
