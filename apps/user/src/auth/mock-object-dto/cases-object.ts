import { throwValidationError } from './data/mock-class-validator';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { filterKeysFromObject } from './data/utils';
import { DtoTestcasesdata } from './test-case-dto';

export const casesObj = {
  isEmail: ({ dto, data, fieldCheck }) => {
    //  ID checking with correct and empty value
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );

        expect(errors.length).toBe(0);
      });

      it('Empty value', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]: '',
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isEmail,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isEmail',
          ),
        );
      });
    });
  },

  stringOptionalValidator: ({
    dto,
    data,
    fieldCheck,
  }) => {
    //  ID checking with correct and empty value
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );

        expect(errors.length).toBe(0);
      });

      it('Empty value', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]: 23,
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isString,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isString',
          ),
        );
      });
    });
  },

  isOptional: ({ dto, data, fieldCheck }) => {
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );

        expect(errors.length).toBe(0);
      });

      // Checking for optional value
      it('For Optional checkpoint', async () => {
        const errors = await validate(
          plainToClass(
            dto,
            filterKeysFromObject({
              obj: data,
              keys: [fieldCheck],
            }),
          ),
        );

        expect(errors.length).toBe(0);
      });
    });
  },

  isString: ({ dto, data, fieldCheck }) => {
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );

        expect(errors.length).toBe(0);
      });

      // Checking for string value
      it('String value', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]: 2,
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isString,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isString',
          ),
        );
      });
    });
  },

  isNotEmpty: ({ dto, data, fieldCheck }) => {
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );

        expect(errors.length).toBe(0);
      });

      it('Empty value throwing error', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]: '',
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isNotEmpty,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isNotEmpty',
          ),
        );
      });
    });
  },

  isNumber: ({ dto, data, fieldCheck }) => {
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );

        expect(errors.length).toBe(0);
      });

      // Checking for non-numerical value
      it('For non-numerical value', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]: '',
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isNumber,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isNumber',
          ),
        );
      });
    });
  },

  maxDecimalPlace: ({
    dto,
    data,
    fieldCheck,
  }) => {
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );

        expect(errors.length).toBe(0);
      });

      // Checking for decimal value not more than 10
      it('For decimal value not more than 10', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]:
              DtoTestcasesdata.notMoreThan10Decimal,
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isNumber,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isNumber',
          ),
        );
      });

      // Checking for not a numerical value
      it('For non-numerical value', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]: '',
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isNumber,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isNumber',
          ),
        );
      });
    });
  },

  isEnum: ({ dto, data, fieldCheck }) => {
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );
        expect(errors.length).toBe(0);
      });
      // Checking for Enum value
      it('Enum value', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]: 2,
          }),
        );
        expect(errors.length).toBe(1);

        expect(errors[0].constraints.isEnum).toBe(
          throwValidationError(
            fieldCheck,
            'isEnum',
          ),
        );
      });
    });
  },

  isValidEnum: ({ dto, data, fieldCheck }) => {
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );
        expect(errors.length).toBe(0);
      });

      // Checking for Enum value
      it('Enum value', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]: 2,
          }),
        );

        expect(errors.length).toBe(1);

        expect(errors[0].constraints.isEnum).toBe(
          throwValidationError(
            fieldCheck,
            'isValidEnum',
          ),
        );
      });
    });
  },

  numberValidator: ({
    dto,
    data,
    fieldCheck,
  }) => {
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );
        expect(errors.length).toBe(0);
      });

      // Checking for decimal value not more than 10
      it('For decimal value not more than 10', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]:
              DtoTestcasesdata.notMoreThan10Decimal,
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isNumber,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isNumber',
          ),
        );
      });

      // Checking for not a numerical value
      it('For non-numerical value', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]: '',
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isNumber,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isNumber',
          ),
        );
      });
    });
  },

  numberOptionalValidator: ({
    dto,
    data,
    fieldCheck,
  }) => {
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );
        expect(errors.length).toBe(0);
      });

      // Checking for decimal value not more than 10
      it('For decimal value not more than 10', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]:
              DtoTestcasesdata.notMoreThan10Decimal,
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isNumber,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isNumber',
          ),
        );
      });

      // Checking for not a numerical value
      it('For non-numerical value', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]: '',
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isNumber,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isNumber',
          ),
        );
      });

      // Checking for optional value
      it('For Optional checkpoint', async () => {
        const errors = await validate(
          plainToClass(
            dto,
            filterKeysFromObject({
              obj: data,
              keys: [fieldCheck],
            }),
          ),
        );

        expect(errors.length).toBe(0);
      });
    });
  },

  isArray: ({ dto, data, fieldCheck }) => {
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );
        expect(errors.length).toBe(0);
      });

      // Checking for Array value
      it('Array value', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]: 2,
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isArray,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isArray',
          ),
        );
      });
    });
  },

  arrayOptionalValidator: ({
    dto,
    data,
    fieldCheck,
  }) => {
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );
        expect(errors.length).toBe(0);
      });

      // Checking for optional value
      it('For Optional checkpoint', async () => {
        const errors = await validate(
          plainToClass(
            dto,
            filterKeysFromObject({
              obj: data,
              keys: [fieldCheck],
            }),
          ),
        );

        expect(errors.length).toBe(0);
      });

      // Checking for Array value
      it('Array value', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]: 2,
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isArray,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isArray',
          ),
        );
      });
    });
  },

  isBoolean: ({ dto, data, fieldCheck }) => {
    return describe(`${fieldCheck} Check-point`, () => {
      it('With Correct value', async () => {
        const errors = await validate(
          plainToClass(dto, data),
        );

        expect(errors.length).toBe(0);
      });

      // Checking for Boolean value
      it('For Boolean value', async () => {
        const errors = await validate(
          plainToClass(dto, {
            ...data,
            [fieldCheck]: '',
          }),
        );

        expect(errors.length).toBe(1);

        expect(
          errors[0].constraints.isBoolean,
        ).toBe(
          throwValidationError(
            fieldCheck,
            'isBoolean',
          ),
        );
      });
    });
  },
};
