import { ModuleName } from '@prisma/client';
import { ModuleTypeAccess } from 'apps/shared/entity/types';
import {
  StringValidator,
  ArrayOptionalValidator,
} from 'shared/common-dto/common.decorator';

export class CreateModuleDto {
  @StringValidator()
  name: ModuleName;

  @StringValidator()
  userId: string;

  @ArrayOptionalValidator()
  controls: Array<ModuleTypeAccess>;
}
