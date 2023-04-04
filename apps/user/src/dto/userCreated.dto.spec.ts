import {
  ControlsArray,
  UserCreatedDto,
} from './userCreated.dto';
import { commonCases } from '../auth/mock-object-dto';
import {
  controlsArrayData,
  userCreatedData,
} from '../auth/mock-object-dto/mock_data';

describe('ControlsArray', () => {
  // Checking name
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'name',
    params: {
      dto: ControlsArray,
      data: controlsArrayData,
    },
  });

  commonCases({
    typeCheck: 'isValidEnum',
    fieldCheck: 'name',
    params: {
      dto: ControlsArray,
      data: controlsArrayData,
    },
  });

  // Checking controls
  commonCases({
    typeCheck: 'isArray',
    fieldCheck: 'controls',
    params: {
      dto: ControlsArray,
      data: controlsArrayData,
    },
  });
});

// Checking email
describe('UserCreatedDto', () => {
  commonCases({
    typeCheck: 'isEmail',
    fieldCheck: 'email',
    params: {
      dto: UserCreatedDto,
      data: userCreatedData,
    },
  });

  // Checking moduleAccess
  commonCases({
    typeCheck: 'isArray',
    fieldCheck: 'moduleAccess',
    params: {
      dto: UserCreatedDto,
      data: userCreatedData,
    },
  });

  // Checking role
  commonCases({
    typeCheck: 'isOptional',
    fieldCheck: 'role',
    params: {
      dto: UserCreatedDto,
      data: userCreatedData,
    },
  });

  commonCases({
    typeCheck: 'isValidEnum',
    fieldCheck: 'role',
    params: {
      dto: UserCreatedDto,
      data: userCreatedData,
    },
  });

  // Checking companyName
  commonCases({
    typeCheck: 'stringOptionalValidator',
    fieldCheck: 'companyName',
    params: {
      dto: UserCreatedDto,
      data: userCreatedData,
    },
  });
});
