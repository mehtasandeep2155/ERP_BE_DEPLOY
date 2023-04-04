import { ChangedStock } from '../stockactions/dto/stockactions.dto';
export declare class ChangedMainStock {
    increaseInStock: ChangedStock[];
    decreaseInStock: ChangedStock[];
}
export declare class InventoryDto {
    inventory_view: Array<string>;
    rawStockChange: ChangedMainStock[];
    garbageStockChange: ChangedMainStock[];
    finishedStockChange: ChangedMainStock[];
}
