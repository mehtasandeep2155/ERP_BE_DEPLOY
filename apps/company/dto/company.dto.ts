import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { StringValidator } from 'shared/common-dto/common.decorator';

export class CompanyDto {
  @StringValidator()
  name: string;

  @ApiProperty()
  @IsArray()
  subCompanyId: Array<string>;
}
