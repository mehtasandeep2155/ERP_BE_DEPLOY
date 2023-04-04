export type AllowedTypeChecks =
  | 'isNotEmpty'
  | 'isString'
  | 'isEmail'
  | 'stringOptionalValidator'
  | 'stringValidator'
  | 'isNumber'
  | 'isOptional'
  | 'maxDecimalPlace'
  | 'isEnum'
  | 'numberOptionalValidator'
  | 'isValidEnum'
  | 'isArray'
  | 'arrayOptionalValidator'
  | 'numberValidator'
  | 'isBoolean';

export type AllowedIdChecks =
  | 'email'
  | 'password'
  | 'rate'
  | 'variantId'
  | 'colorId'
  | 'typeId'
  | 'dimensionId'
  | 'color'
  | 'weight'
  | 'inventory_view'
  | 'name'
  | 'userId'
  | 'controls'
  | 'moduleAccess'
  | 'companyName'
  | 'subtype'
  | 'products'
  | 'challan_number'
  | 'order_number'
  | 'customer_name'
  | 'has_raw_material'
  | 'cost_per_kg'
  | 'height'
  | 'uom'
  | 'sectionName'
  | 'sectionNumber'
  | 'width'
  | 'thickness'
  | 'outerDiameter';

export type AllowedFieldNotEmptyChecks =
  | AllowedIdChecks
  | 'type'
  | 'weight'
  | 'weightUomId'
  | 'count'
  | 'rawStockChange'
  | 'garbageStockChange'
  | 'finishedStockChange'
  | 'increaseInStock'
  | 'decreaseInStock'
  | 'weightUom'
  | 'subCompanyId'
  | 'rateId'
  | 'role'
  | 'coating_discount'
  | 'tax'
  | 'coatingId';

export type AllowedOptionalTypeChecks =
  AllowedFieldNotEmptyChecks;

export type MaxLengthOrNumberTypeChecks =
  AllowedOptionalTypeChecks;

export type AllowedFieldCheckTypes =
  MaxLengthOrNumberTypeChecks;
