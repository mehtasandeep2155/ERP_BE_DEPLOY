import { ProductVariantDto } from './productvariant.dto';
import { commonCases } from '../../../../user/src/auth/mock-object-dto/';
import { productVariantData } from '../../../../user/src/auth/mock-object-dto/mock_data';

describe('ProductVariantDto', () => {
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'sectionName',
    params: {
      dto: ProductVariantDto,
      data: productVariantData,
    },
  });
  commonCases({
    typeCheck: 'isNumber',
    fieldCheck: 'sectionNumber',
    params: {
      dto: ProductVariantDto,
      data: productVariantData,
    },
  });
  commonCases({
    typeCheck: 'numberOptionalValidator',
    fieldCheck: 'width',
    params: {
      dto: ProductVariantDto,
      data: productVariantData,
    },
  });
  commonCases({
    typeCheck: 'numberOptionalValidator',
    fieldCheck: 'height',
    params: {
      dto: ProductVariantDto,
      data: productVariantData,
    },
  });
  commonCases({
    typeCheck: 'numberOptionalValidator',
    fieldCheck: 'thickness',
    params: {
      dto: ProductVariantDto,
      data: productVariantData,
    },
  });
  commonCases({
    typeCheck: 'numberOptionalValidator',
    fieldCheck: 'outerDiameter',
    params: {
      dto: ProductVariantDto,
      data: productVariantData,
    },
  });
  commonCases({
    typeCheck: 'isNumber',
    fieldCheck: 'weight',
    params: {
      dto: ProductVariantDto,
      data: productVariantData,
    },
  });
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'weightUomId',
    params: {
      dto: ProductVariantDto,
      data: productVariantData,
    },
  });
});
