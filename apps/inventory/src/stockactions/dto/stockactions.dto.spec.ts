import {
  ChangedStock,
  StockActionsDto,
} from './stockactions.dto';
import { commonCases } from '../../../../user/src/auth/mock-object-dto';
import {
  changedStockData,
  stockActionsData,
} from '../../../../user/src/auth/mock-object-dto/mock_data';

describe('ChangedStock', () => {
  commonCases({
    typeCheck: 'numberOptionalValidator',
    fieldCheck: 'weight',
    params: {
      dto: ChangedStock,
      data: changedStockData,
    },
  });

  commonCases({
    typeCheck: 'stringOptionalValidator',
    fieldCheck: 'weightUom',
    params: {
      dto: ChangedStock,
      data: changedStockData,
    },
  });

  commonCases({
    typeCheck: 'isNumber',
    fieldCheck: 'count',
    params: {
      dto: ChangedStock,
      data: changedStockData,
    },
  });

  commonCases({
    typeCheck: 'isOptional',
    fieldCheck: 'count',
    params: {
      dto: ChangedStock,
      data: changedStockData,
    },
  });
});

describe('StockActionsDto', () => {
  commonCases({
    typeCheck: 'isValidEnum',
    fieldCheck: 'type',
    params: {
      dto: StockActionsDto,
      data: stockActionsData,
    },
  });

  commonCases({
    typeCheck: 'isOptional',
    fieldCheck: 'increaseInStock',
    params: {
      dto: StockActionsDto,
      data: stockActionsData,
    },
  });

  commonCases({
    typeCheck: 'isArray',
    fieldCheck: 'increaseInStock',
    params: {
      dto: StockActionsDto,
      data: stockActionsData,
    },
  });

  commonCases({
    typeCheck: 'isOptional',
    fieldCheck: 'decreaseInStock',
    params: {
      dto: StockActionsDto,
      data: stockActionsData,
    },
  });
  commonCases({
    typeCheck: 'isArray',
    fieldCheck: 'decreaseInStock',
    params: {
      dto: StockActionsDto,
      data: stockActionsData,
    },
  });
});
