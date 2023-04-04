import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { StringValidator } from 'shared/common-dto/common.decorator';

export class ProductDimensionDto {
  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 10 })
  height: number;

  @StringValidator()
  uom: string;
}
