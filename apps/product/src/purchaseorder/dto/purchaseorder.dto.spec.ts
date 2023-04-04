import { PurchaseOrderDto } from './purchaseorder.dto';
import { commonCases } from '../../../../user/src/auth/mock-object-dto';
import { purchaseOrderData } from '../../../../user/src/auth/mock-object-dto/mock_data';

describe('PurchaseOrderDto', () => {
  // Checking products
  commonCases({
    typeCheck: 'isArray',
    fieldCheck: 'products',
    params: {
      dto: PurchaseOrderDto,
      data: purchaseOrderData,
    },
  });

  // Checking challan_number
  commonCases({
    typeCheck: 'isNumber',
    fieldCheck: 'challan_number',
    params: {
      dto: PurchaseOrderDto,
      data: purchaseOrderData,
    },
  });

  // Checking order_number
  commonCases({
    typeCheck: 'isNumber',
    fieldCheck: 'order_number',
    params: {
      dto: PurchaseOrderDto,
      data: purchaseOrderData,
    },
  });

  // Checking customer_name
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'customer_name',
    params: {
      dto: PurchaseOrderDto,
      data: purchaseOrderData,
    },
  });

  // Checking has_raw_material
  commonCases({
    typeCheck: 'isBoolean',
    fieldCheck: 'has_raw_material',
    params: {
      dto: PurchaseOrderDto,
      data: purchaseOrderData,
    },
  });

  // Checking cost_per_kg
  commonCases({
    typeCheck: 'maxDecimalPlace',
    fieldCheck: 'cost_per_kg',
    params: {
      dto: PurchaseOrderDto,
      data: purchaseOrderData,
    },
  });

  // Checking coating_discount
  commonCases({
    typeCheck: 'numberOptionalValidator',
    fieldCheck: 'coating_discount',
    params: {
      dto: PurchaseOrderDto,
      data: purchaseOrderData,
    },
  });

  // Checking tax
  commonCases({
    typeCheck: 'numberOptionalValidator',
    fieldCheck: 'tax',
    params: {
      dto: PurchaseOrderDto,
      data: purchaseOrderData,
    },
  });
});
