import { casesObj } from './cases-object';
import {
  AllowedTypeChecks,
  AllowedFieldCheckTypes,
} from './types';

/**
 *
 * @param typeCheck type of cases
 * @param fieldCheck field for the case
 * @param params pass dto and data object
 * @returns cases for required field with empty and correct value
 */
export const commonCases = ({
  typeCheck,
  fieldCheck,
  params,
}: {
  typeCheck: AllowedTypeChecks;
  fieldCheck: AllowedFieldCheckTypes;
  params;
}) => {
  return casesObj[typeCheck]({
    ...params,
    fieldCheck,
  });
};
