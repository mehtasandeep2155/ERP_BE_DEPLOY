import {
  StringValidator,
  NumberValidator,
  NumberOptionalValidator,
} from 'shared/common-dto/common.decorator';

export class ProductVariantDto {
  @StringValidator()
  sectionName: string;

  @NumberValidator()
  sectionNumber: number;

  @NumberOptionalValidator()
  width: number;

  @NumberOptionalValidator()
  height: number;

  @NumberOptionalValidator()
  thickness: number;

  @NumberOptionalValidator()
  outerDiameter: number;

  @NumberValidator()
  weight: number;

  @StringValidator()
  weightUomId: string;
}
