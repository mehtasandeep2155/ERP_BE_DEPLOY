import {
  ChangedMainStock,
  InventoryDto,
} from './inventory.dto';
import { commonCases } from '../../../user/src/auth/mock-object-dto';
import {
  changedMainStockData,
  inventoryData,
} from '../../../user/src/auth/mock-object-dto/mock_data';

describe('ChangedMainStock', () => {
  // Checking increaseInStock
  commonCases({
    typeCheck: 'arrayOptionalValidator',
    fieldCheck: 'increaseInStock',
    params: {
      dto: ChangedMainStock,
      data: changedMainStockData,
    },
  });

  // Checking decreaseInStock
  commonCases({
    typeCheck: 'arrayOptionalValidator',
    fieldCheck: 'decreaseInStock',
    params: {
      dto: ChangedMainStock,
      data: changedMainStockData,
    },
  });
});

describe('InventoryDto', () => {
  // Checking inventory_view
  commonCases({
    typeCheck: 'isArray',
    fieldCheck: 'inventory_view',
    params: {
      dto: InventoryDto,
      data: inventoryData,
    },
  });

  // Checking rawStockChange
  commonCases({
    typeCheck: 'arrayOptionalValidator',
    fieldCheck: 'rawStockChange',
    params: {
      dto: InventoryDto,
      data: inventoryData,
    },
  });

  // Checking garbageStockChange
  commonCases({
    typeCheck: 'arrayOptionalValidator',
    fieldCheck: 'garbageStockChange',
    params: {
      dto: InventoryDto,
      data: inventoryData,
    },
  });

  // Checking finishedStockChange
  commonCases({
    typeCheck: 'arrayOptionalValidator',
    fieldCheck: 'finishedStockChange',
    params: {
      dto: InventoryDto,
      data: inventoryData,
    },
  });
});
