import {
  ArrayOptionalValidator,
  ArrayValidator,
} from 'shared/common-dto/common.decorator';
import { ChangedStock } from '../stockactions/dto/stockactions.dto';

export class ChangedMainStock {
  @ArrayOptionalValidator()
  increaseInStock: ChangedStock[];

  @ArrayOptionalValidator()
  decreaseInStock: ChangedStock[];
}

export class InventoryDto {
  @ArrayValidator()
  inventory_view: Array<string>;

  @ArrayOptionalValidator()
  rawStockChange: ChangedMainStock[];

  @ArrayOptionalValidator()
  garbageStockChange: ChangedMainStock[];

  @ArrayOptionalValidator()
  finishedStockChange: ChangedMainStock[];
}
