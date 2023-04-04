import { ApiProperty } from '@nestjs/swagger';
import { InventoryType } from '@prisma/client';
import {
  IsArray,
  IsEnum,
  IsOptional,
} from 'class-validator';
import {
  NumberOptionalValidator,
  StringOptionalValidator,
  NumberValidator,
} from 'shared/common-dto/common.decorator';

export class ChangedStock {
  @NumberOptionalValidator()
  weight: number;

  @StringOptionalValidator()
  weightUom: string;

  @NumberValidator()
  @IsOptional()
  count: number;
}
export class StockActionsDto {
  @ApiProperty()
  @IsEnum(InventoryType)
  type: InventoryType;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  increaseInStock: ChangedStock[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  decreaseInStock: ChangedStock[];
}
