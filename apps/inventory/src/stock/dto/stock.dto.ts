import { InventoryType } from '@prisma/client';
import {
  IsEnum,
  IsOptional,
} from 'class-validator';
import {
  StringValidator,
  NumberOptionalValidator,
  StringOptionalValidator,
  NumberValidator,
} from 'shared/common-dto/common.decorator';

export class StockDto {
  @StringValidator()
  @IsEnum(InventoryType)
  type: InventoryType;

  @NumberOptionalValidator()
  weight: number;

  @StringOptionalValidator()
  weightUomId: string;

  @NumberValidator()
  @IsOptional()
  count: number;
}
