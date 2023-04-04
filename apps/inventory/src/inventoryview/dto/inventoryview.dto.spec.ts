import { InventoryViewDto } from './inventoryview.dto';
import { commonCases } from '../../../../user/src/auth/mock-object-dto';
import { inventoryViewData } from '../../../../user/src/auth/mock-object-dto/mock_data';

describe('InventoryViewDto', () => {
  // Checking type
  commonCases({
    typeCheck: 'isValidEnum',
    fieldCheck: 'type',
    params: {
      dto: InventoryViewDto,
      data: inventoryViewData,
    },
  });

  // Checking variantId
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'variantId',
    params: {
      dto: InventoryViewDto,
      data: inventoryViewData,
    },
  });

  // Checking colorId
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'colorId',
    params: {
      dto: InventoryViewDto,
      data: inventoryViewData,
    },
  });

  // Checking coatingId
  commonCases({
    typeCheck: 'stringOptionalValidator',
    fieldCheck: 'coatingId',
    params: {
      dto: InventoryViewDto,
      data: inventoryViewData,
    },
  });

  // Checking dimensionId
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'dimensionId',
    params: {
      dto: InventoryViewDto,
      data: inventoryViewData,
    },
  });

  // Checking weight
  commonCases({
    typeCheck: 'numberOptionalValidator',
    fieldCheck: 'weight',
    params: {
      dto: InventoryViewDto,
      data: inventoryViewData,
    },
  });

  // Checking weightUomId
  commonCases({
    typeCheck: 'stringOptionalValidator',
    fieldCheck: 'weightUomId',
    params: {
      dto: InventoryViewDto,
      data: inventoryViewData,
    },
  });

  // Checking count
  commonCases({
    typeCheck: 'isNumber',
    fieldCheck: 'count',
    params: {
      dto: InventoryViewDto,
      data: inventoryViewData,
    },
  });

  commonCases({
    typeCheck: 'isOptional',
    fieldCheck: 'count',
    params: {
      dto: InventoryViewDto,
      data: inventoryViewData,
    },
  });
});
