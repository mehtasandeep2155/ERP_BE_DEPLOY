import {
  AuthDto,
  AuthSignInDto,
  PasswordDto,
  ResetPassDto,
} from './auth.dto';
import { commonCases } from '../mock-object-dto';
import {
  authData,
  authSignInDto,
  passwordDto,
  resetPassDto,
} from '../mock-object-dto/mock_data';

describe('AuthDto', () => {
  // checking for email
  commonCases({
    typeCheck: 'isEmail',
    fieldCheck: 'email',
    params: {
      data: authData,
      dto: AuthDto,
    },
  });

  commonCases({
    typeCheck: 'isNotEmpty',
    fieldCheck: 'email',
    params: {
      data: authData,
      dto: AuthDto,
    },
  });

  // checking for password
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'password',
    params: {
      data: authData,
      dto: AuthDto,
    },
  });

  commonCases({
    typeCheck: 'isNotEmpty',
    fieldCheck: 'password',
    params: {
      data: authData,
      dto: AuthDto,
    },
  });

  // checking for StringOptionalValidator
  commonCases({
    typeCheck: 'stringOptionalValidator',
    fieldCheck: 'password',
    params: {
      data: authData,
      dto: AuthDto,
    },
  });
});

describe('AuthSignInDto', () => {
  // checking for email
  commonCases({
    typeCheck: 'isEmail',
    fieldCheck: 'email',
    params: {
      data: authSignInDto,
      dto: AuthSignInDto,
    },
  });

  commonCases({
    typeCheck: 'isNotEmpty',
    fieldCheck: 'email',
    params: {
      data: authSignInDto,
      dto: AuthSignInDto,
    },
  });

  // checking for password
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'password',
    params: {
      data: authSignInDto,
      dto: AuthSignInDto,
    },
  });

  commonCases({
    typeCheck: 'isNotEmpty',
    fieldCheck: 'password',
    params: {
      data: authSignInDto,
      dto: AuthSignInDto,
    },
  });
});

describe('PasswordDto', () => {
  // checking for email
  commonCases({
    typeCheck: 'isEmail',
    fieldCheck: 'email',
    params: {
      data: passwordDto,
      dto: PasswordDto,
    },
  });

  commonCases({
    typeCheck: 'isNotEmpty',
    fieldCheck: 'email',
    params: {
      data: passwordDto,
      dto: PasswordDto,
    },
  });
});

describe('ResetPassDto', () => {
  // checking for email
  commonCases({
    typeCheck: 'isEmail',
    fieldCheck: 'email',
    params: {
      data: resetPassDto,
      dto: ResetPassDto,
    },
  });

  commonCases({
    typeCheck: 'isNotEmpty',
    fieldCheck: 'email',
    params: {
      data: resetPassDto,
      dto: ResetPassDto,
    },
  });

  // checking for password
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'password',
    params: {
      data: resetPassDto,
      dto: ResetPassDto,
    },
  });

  commonCases({
    typeCheck: 'isNotEmpty',
    fieldCheck: 'password',
    params: {
      data: resetPassDto,
      dto: ResetPassDto,
    },
  });

  // checking for token
  commonCases({
    typeCheck: 'isNotEmpty',
    fieldCheck: 'password',
    params: {
      data: resetPassDto,
      dto: ResetPassDto,
    },
  });

  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'password',
    params: {
      data: resetPassDto,
      dto: ResetPassDto,
    },
  });
});
