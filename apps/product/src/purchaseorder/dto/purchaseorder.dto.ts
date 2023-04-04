import { ApiProperty } from '@nestjs/swagger';
import { POStatus } from '@prisma/client';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNumber,
  IsNumberString,
  IsOptional,
  Matches,
} from 'class-validator';
import {
  ArrayValidator,
  NumberOptionalValidator,
  NumberValidator,
  StringOptionalValidator,
} from 'shared/common-dto/common.decorator';

export class PurchaseOrderDto {
  @ArrayValidator()
  products: Array<string>;

  @NumberValidator()
  challan_number: number;

  @NumberValidator()
  order_number: number;

  @StringOptionalValidator()
  customer_id: string;

  @StringOptionalValidator()
  customer_name: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  customer_email: string;

  @ApiProperty()
  @IsOptional()
  @IsNumberString()
  @Matches(/^[0-9]{10}$/, {
    message: 'Invalid Mobile Number',
  })
  customer_phone: string;

  @StringOptionalValidator()
  credit_note: string;

  @ApiProperty()
  @IsBoolean()
  has_raw_material: boolean;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 10 })
  cost_per_kg: number;

  @NumberOptionalValidator()
  coating_discount: number;

  @NumberOptionalValidator()
  tax: number;
}

export class VerifyPurchaseOrderDto {
  @ApiProperty()
  @IsEnum(POStatus)
  status: POStatus;
}
