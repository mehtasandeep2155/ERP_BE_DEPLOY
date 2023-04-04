import { ProductTypeDto } from './product-type.dto';
import { commonCases } from '../../../../user/src/auth/mock-object-dto';
import { productTypeData } from '../../../../user/src/auth/mock-object-dto/mock_data';

describe('ProductTypeDto', () => {
  // Checking type
  commonCases({
    typeCheck: 'isValidEnum',
    fieldCheck: 'type',
    params: {
      dto: ProductTypeDto,
      data: productTypeData,
    },
  });

  // Checking subtype
  commonCases({
    typeCheck: 'isValidEnum',
    fieldCheck: 'subtype',
    params: {
      dto: ProductTypeDto,
      data: productTypeData,
    },
  });
});
