import { RateDto } from './rate.dto';
import { commonCases } from '../../../../user/src/auth/mock-object-dto';
import { RateData } from '../../../../user/src/auth/mock-object-dto/mock_data';

describe('RateDto', () => {
  // checking for rate
  commonCases({
    typeCheck: 'maxDecimalPlace',
    fieldCheck: 'rate',
    params: {
      dto: RateDto,
      data: RateData,
    },
  });

  // checking for variantId
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'variantId',
    params: {
      dto: RateDto,
      data: RateData,
    },
  });

  commonCases({
    typeCheck: 'isOptional',
    fieldCheck: 'variantId',
    params: {
      dto: RateDto,
      data: RateData,
    },
  });

  // checking for colorId
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'colorId',
    params: {
      dto: RateDto,
      data: RateData,
    },
  });

  commonCases({
    typeCheck: 'isOptional',
    fieldCheck: 'colorId',
    params: {
      dto: RateDto,
      data: RateData,
    },
  });

  // checking for typeId
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'typeId',
    params: {
      dto: RateDto,
      data: RateData,
    },
  });

  commonCases({
    typeCheck: 'isOptional',
    fieldCheck: 'typeId',
    params: {
      dto: RateDto,
      data: RateData,
    },
  });

  // checking for dimensionId
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'dimensionId',
    params: {
      dto: RateDto,
      data: RateData,
    },
  });
  commonCases({
    typeCheck: 'isOptional',
    fieldCheck: 'dimensionId',
    params: {
      dto: RateDto,
      data: RateData,
    },
  });
});
