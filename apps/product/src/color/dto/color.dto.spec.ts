import { ColorDto } from './color.dto';
import { commonCases } from '../../../../user/src/auth/mock-object-dto/index';
import { ColorData } from '../../../../user/src/auth/mock-object-dto/mock_data';

describe('ColorDto', () => {
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'color',
    params: {
      dto: ColorDto,
      data: ColorData,
    },
  });
});
