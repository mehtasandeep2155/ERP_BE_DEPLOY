import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumberString,
  IsOptional,
  Matches,
} from 'class-validator';
import {
  StringOptionalValidator,
  StringValidator,
} from 'shared/common-dto/common.decorator';

export class CustomerDto {
  @StringValidator()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsNumberString()
  @Matches(/^[0-9]{10}$/, {
    message: 'Invalid Mobile Number',
  })
  phone: string;

  @StringOptionalValidator()
  credit_note: string;
}
