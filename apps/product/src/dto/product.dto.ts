import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import {
  NumberValidator,
  StringValidator,
} from 'shared/common-dto/common.decorator';

export class ProductDto {
  @NumberValidator()
  count: number;

  @StringValidator()
  rateId: string;

  @StringValidator()
  userId: string;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 10 })
  weight: number;

  @StringValidator()
  weightUom: string;
}
