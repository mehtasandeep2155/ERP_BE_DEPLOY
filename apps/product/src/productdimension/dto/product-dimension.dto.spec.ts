import { ProductDimensionDto } from './product-dimension.dto';
import { commonCases } from '../../../../user/src/auth/mock-object-dto';
import { productDimensionData } from '../../../../user/src/auth/mock-object-dto/mock_data';

describe('ProductDimensionDto', () => {
  // Checking height
  commonCases({
    typeCheck: 'maxDecimalPlace',
    fieldCheck: 'height',
    params: {
      dto: ProductDimensionDto,
      data: productDimensionData,
    },
  });

  // Checking uom
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'uom',
    params: {
      dto: ProductDimensionDto,
      data: productDimensionData,
    },
  });
});
