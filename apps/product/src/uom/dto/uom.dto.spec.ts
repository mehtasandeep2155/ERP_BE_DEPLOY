import { UomDto } from './uom.dto';
import { commonCases } from '../../../../user/src/auth/mock-object-dto';
import { uomData } from '../../../../user/src/auth/mock-object-dto/mock_data';

describe('ResetPassDto', () => {
  // checking for stringValidator
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'type',
    params: {
      data: uomData,
      dto: UomDto,
    },
  });
});
