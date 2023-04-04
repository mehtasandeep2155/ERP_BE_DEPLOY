import { mockObject } from './mock-object';

export function throwValidationError(
  value: string,
  condition: string,
  param?: string | number,
): string {
  return mockObject[condition](value, param);
}
