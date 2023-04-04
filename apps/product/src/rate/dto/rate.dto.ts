import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { StringOptionalValidator } from 'shared/common-dto/common.decorator';

export class RateDto {
  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 10 })
  rate: number;

  @StringOptionalValidator()
  variantId: string;

  @StringOptionalValidator()
  colorId: string;

  @StringOptionalValidator()
  typeId: string;

  @StringOptionalValidator()
  dimensionId: string;
}
