import { ProductDto } from './product.dto';
import { commonCases } from '../../../user/src/auth/mock-object-dto';
import { productData } from '../../../user/src/auth/mock-object-dto/mock_data';

describe('ProductDto', () => {
  // Checking count
  commonCases({
    typeCheck: 'isNumber',
    fieldCheck: 'count',
    params: {
      dto: ProductDto,
      data: productData,
    },
  });

  // Checking rateId
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'rateId',
    params: {
      dto: ProductDto,
      data: productData,
    },
  });

  // Checking userId
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'userId',
    params: {
      dto: ProductDto,
      data: productData,
    },
  });

  // Checking weight
  commonCases({
    typeCheck: 'maxDecimalPlace',
    fieldCheck: 'weight',
    params: {
      dto: ProductDto,
      data: productData,
    },
  });

  // Checking weightUom
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'weightUom',
    params: {
      dto: ProductDto,
      data: productData,
    },
  });
});
