import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export function StringOptionalValidator() {
  return applyDecorators(
    ApiProperty(),
    IsString(),
    IsOptional(),
  );
}

export function StringValidator() {
  return applyDecorators(
    ApiProperty(),
    IsString(),
  );
}

export function NumberOptionalValidator() {
  return applyDecorators(
    ApiProperty(),
    IsOptional(),
    IsNumber({ maxDecimalPlaces: 10 }),
  );
}

export function NumberValidator() {
  return applyDecorators(
    ApiProperty(),
    IsNumber(),
  );
}

export function ArrayOptionalValidator() {
  return applyDecorators(
    ApiProperty(),
    IsOptional(),
    IsArray(),
  );
}

export function ArrayValidator() {
  return applyDecorators(
    ApiProperty(),
    IsArray(),
  );
}
