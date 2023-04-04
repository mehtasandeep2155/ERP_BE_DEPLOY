import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StockDto } from './dto/stock.dto';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(
    private readonly stockService: StockService,
  ) {}

  // @Get()
  // async getStock() {
  //   return this.stockService.getStock();
  // }

  // @Get(':id')
  // async getStockById(@Param('id') id: string) {
  //   return this.stockService.getStockById(id);
  // }

  // @Post()
  // async createStock(@Body() dto: StockDto) {
  //   return this.stockService.createStock(dto);
  // }

  // @Patch(':id')
  // async updateStock(
  //   @Param('id') id: string,
  //   @Body() dto: StockDto,
  // ) {
  //   return this.stockService.updateStock(id, dto);
  // }

  // @Delete(':id')
  // async deleteStock(@Param('id') id: string) {
  //   return this.stockService.delete(id);
  // }
}
