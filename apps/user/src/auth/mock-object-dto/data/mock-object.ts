const mockObject = {
  isNotEmpty: (value) =>
    `${value} should not be empty`,

  isEmail: (value) => `${value} must be an email`,

  isString: (value) =>
    `${value} must be a string`,

  stringOptionalValidator: (value) =>
    `${value} should not be empty`,

  isNumber: (value) =>
    `${value} must be a number conforming to the specified constraints`,

  isEnum: (value) =>
    `each value in ${value} must be a valid enum value`,

  isValidEnum: (value) =>
    `${value} must be a valid enum value`,

  isArray: (value) => `${value} must be an array`,

  isBoolean: (value) =>
    `${value} must be a boolean value`,

  default: () => ``,
};

export { mockObject };
