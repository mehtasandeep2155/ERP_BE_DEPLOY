import { ApiProperty } from '@nestjs/swagger';
import { InventoryType } from '@prisma/client';
import {
  IsEnum,
  IsOptional,
} from 'class-validator';
import {
  StringValidator,
  StringOptionalValidator,
  NumberOptionalValidator,
  NumberValidator,
} from 'shared/common-dto/common.decorator';

export class InventoryViewDto {
  @ApiProperty()
  @IsEnum(InventoryType)
  type: InventoryType;

  @StringValidator()
  variantId: string;

  @StringValidator()
  colorId: string;

  @StringOptionalValidator()
  coatingId: string;

  @StringValidator()
  dimensionId: string;

  @NumberOptionalValidator()
  weight: number;

  @StringOptionalValidator()
  weightUomId: string;

  @NumberValidator()
  @IsOptional()
  count: number;
}
