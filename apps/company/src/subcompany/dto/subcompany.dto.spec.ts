import { SubCompanyDto } from './subcompany.dto';
import { commonCases } from '../../../../user/src/auth/mock-object-dto';
import { subCompanyData } from '../../../../user/src/auth/mock-object-dto/mock_data';

describe('SubCompanyDto', () => {
  // Checking name
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'name',
    params: {
      dto: SubCompanyDto,
      data: subCompanyData,
    },
  });
});
