import {
  InventoryType,
  ModuleName,
  ProductSubType,
  ProductType,
} from '@prisma/client';

import { Role } from '../../../../shared/entity/types';

export const authData = {
  email: 'test@gmail.com',
  password: 'test@1999',
  stringOptionalValidator: 'abc',
};

export const authSignInDto = {
  email: 'test@gmail.com',
  password: 'test@1999',
};

export const passwordDto = {
  email: 'test@gmail.com',
};

export const resetPassDto = {
  email: 'test@gmail.com',
  password: 'test@1999',
  token: '23432453245',
};

export const uomData = {
  type: 'abcCompany',
};

export const RateData = {
  rate: 2,
  variantId: '245346345645',
  colorId: '423523454325345',
  typeId: '3456436436436456456',
  dimensionId: '43765674545',
};

export const ColorData = {
  color: 'red',
};

export const stockData = {
  type: 'raw',
  weight: 23,
  weightUomId: '9870980989874332443245656987',
  count: 2,
};

export const changedStockData = {
  weight: 2,
  weightUom: 'test',
  count: 2,
};

export const stockActionsData = {
  type: InventoryType.raw,
  increaseInStock: [changedStockData.weightUom],
  decreaseInStock: [changedStockData.weightUom],
};

export const changedMainStockData = {
  increaseInStock: [changedStockData.weightUom],
  decreaseInStock: [changedStockData.weightUom],
};

export const inventoryData = {
  inventory_view: ['abc'],
  rawStockChange: [
    changedMainStockData.increaseInStock,
  ],
  garbageStockChange: [
    changedMainStockData.increaseInStock,
  ],
  finishedStockChange: [
    changedMainStockData.increaseInStock,
  ],
};

export const createModuleData = {
  name: 'User',
  userId: 'ashdksadfhsaodf',
  controls: ['abc'],
};

export const companyData = {
  name: 'test',
  subCompanyId: ['test123@abc'],
};

export const productData = {
  count: 2,
  rateId: 'oashdkhsad',
  userId: 'ashdhas',
  weight: 2,
  weightUom: 'asdashd',
};

export const subCompanyData = {
  name: 'test',
};

export const controlsArrayData = {
  name: ModuleName,
  controls: ['abc'],
};

export const userCreatedData = {
  email: 'test@gmail.com',
  moduleAccess: [controlsArrayData.controls],
  role: Role.Admin,
  companyData: 'abc',
};

export const productTypeData = {
  type: ProductType.Anodized,
  subtype: ProductSubType.Normal,
};

export const purchaseOrderData = {
  products: ['fknf', 'kdsnf'],
  challan_number: 987,
  order_number: 987,
  customer_name: 'Name',
  has_raw_material: true,
  cost_per_kg: 2,
  coating_discount: 987,
  tax: 987,
};

export const inventoryViewData = {
  type: InventoryType.raw,
  variantId: 'ksadsahdksadk',
  colorId: 'jsdjf',
  coatingId: 'sdjls',
  dimensionId: 'lsdjls',
  weight: 98,
  weightUomId: 'ksdfsd',
  count: 987,
};

export const productDimensionData = {
  height: 2,
  uom: 'jahfds',
};

export const productVariantData = {
  sectionName: 'lsadl',
  sectionNumber: 65,
  width: 5,
  height: 65,
  thickness: 87,
  outerDiameter: 43,
  weight: 43,
  weightUomId: 'fg',
};
