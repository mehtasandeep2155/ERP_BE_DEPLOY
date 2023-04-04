import { CompanyDto } from './company.dto';
import { commonCases } from '../../user/src/auth/mock-object-dto';
import { companyData } from '../../user/src/auth/mock-object-dto/mock_data';

describe('CompanyDto', () => {
  // Checking name
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'name',
    params: {
      dto: CompanyDto,
      data: companyData,
    },
  });

  // Checking subCompanyId
  commonCases({
    typeCheck: 'isArray',
    fieldCheck: 'subCompanyId',
    params: {
      dto: CompanyDto,
      data: companyData,
    },
  });
});
