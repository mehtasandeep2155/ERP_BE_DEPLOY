import { CreateModuleDto } from './module.dto';
import { commonCases } from '../../../user/src/auth/mock-object-dto';
import { createModuleData } from '../../../user/src/auth/mock-object-dto/mock_data';

describe('CreateModuleDto', () => {
  // Checking name
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'name',
    params: {
      dto: CreateModuleDto,
      data: createModuleData,
    },
  });

  // Checking userId
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'userId',
    params: {
      dto: CreateModuleDto,
      data: createModuleData,
    },
  });

  // Checking controls
  commonCases({
    typeCheck: 'arrayOptionalValidator',
    fieldCheck: 'controls',
    params: {
      dto: CreateModuleDto,
      data: createModuleData,
    },
  });
});
