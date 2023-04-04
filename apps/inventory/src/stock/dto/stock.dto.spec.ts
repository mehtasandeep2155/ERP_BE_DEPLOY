import { StockDto } from './stock.dto';
import { commonCases } from '../../../../user/src/auth/mock-object-dto';
import { stockData } from '../../../../user/src/auth/mock-object-dto/mock_data';

describe('StockDto', () => {
  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'type',
    params: {
      dto: StockDto,
      data: stockData,
    },
  });

  commonCases({
    typeCheck: 'isValidEnum',
    fieldCheck: 'type',
    params: {
      dto: StockDto,
      data: stockData,
    },
  });

  commonCases({
    typeCheck: 'numberOptionalValidator',
    fieldCheck: 'weight',
    params: {
      dto: StockDto,
      data: stockData,
    },
  });

  commonCases({
    typeCheck: 'isString',
    fieldCheck: 'weightUomId',
    params: {
      dto: StockDto,
      data: stockData,
    },
  });

  commonCases({
    typeCheck: 'isOptional',
    fieldCheck: 'weightUomId',
    params: {
      dto: StockDto,
      data: stockData,
    },
  });

  commonCases({
    typeCheck: 'isNumber',
    fieldCheck: 'count',
    params: {
      dto: StockDto,
      data: stockData,
    },
  });
});
