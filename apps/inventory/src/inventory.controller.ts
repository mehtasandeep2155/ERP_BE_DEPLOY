import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InventoryDto } from './dto/inventory.dto';
import { InventoryService } from './inventory.service';
import { InventoryViewDto } from './inventoryview/dto/inventoryview.dto';
import { InventoryviewService } from './inventoryview/inventoryview.service';
import { StockDto } from './stock/dto/stock.dto';
import { StockService } from './stock/stock.service';
import { StockActionsDto } from './stockactions/dto/stockactions.dto';
import { StockactionsService } from './stockactions/stockactions.service';

@Controller('inventory')
export class InventoryController {
  constructor(
    private readonly inventoryService: InventoryService,
    private readonly inventoryviewService: InventoryviewService,
    private readonly stockService: StockService,
    private readonly stockActionsService: StockactionsService,
  ) {}

  @Get('view')
  async getView() {
    return this.inventoryviewService.getView();
  }

  @Get('view/:id')
  async getViewById(@Param('id') id: string) {
    return this.inventoryviewService.getViewById(
      id,
    );
  }

  @Post('view')
  async createView(
    @Body() dto: InventoryViewDto,
  ) {
    return this.inventoryviewService.createView(
      dto,
    );
  }

  @Patch('view/:id')
  async updateView(
    @Body() dto: InventoryViewDto,
    @Param('id') id: string,
  ) {
    return this.inventoryviewService.updateView(
      dto,
      id,
    );
  }

  @Delete('view/:id')
  async deleteView(@Param('id') id: string) {
    return this.inventoryviewService.delete(id);
  }

  @Get('stock')
  async getStock() {
    return this.stockService.getStock();
  }

  @Get('stock/:id')
  async getStockById(@Param('id') id: string) {
    return this.stockService.getStockById(id);
  }

  @Post('stock')
  async createStock(@Body() dto: StockDto) {
    return this.stockService.createStock(dto);
  }

  @Patch('stock/:id')
  async updateStock(
    @Param('id') id: string,
    @Body() dto: StockDto,
  ) {
    return this.stockService.updateStock(id, dto);
  }

  @Delete('stock/:id')
  async deleteStock(@Param('id') id: string) {
    return this.stockService.delete(id);
  }

  @Get('stock-actions')
  async getAction() {
    return this.stockActionsService.get();
  }

  @Get('stock-actions/:id')
  async getActionById(@Param('id') id: string) {
    return this.stockActionsService.getById(id);
  }

  @Post('stock-actions')
  async createActions(
    @Body() dto: StockActionsDto,
  ) {
    return this.stockActionsService.createActions(
      dto,
    );
  }

  @Patch('stock-actions/:id')
  async updateActions(
    @Param('id') id: string,
    @Body() dto: StockActionsDto,
  ) {
    return this.stockActionsService.updateActions(
      id,
      dto,
    );
  }

  @Delete('stock-actions/:id')
  async deleteActions(@Param('id') id: string) {
    return this.stockActionsService.delete(id);
  }

  @Get('inventory')
  async getInventory() {
    return this.inventoryService.getInventory();
  }

  @Get('inventory/:id')
  async getInventoryById(
    @Param('id') id: string,
  ) {
    return this.inventoryService.getInventoryById(
      id,
    );
  }

  @Post('inventory')
  async createInventory(
    @Body() dto: InventoryDto,
  ) {
    return this.inventoryService.createInventory(
      dto,
    );
  }

  @Delete('inventory/:id')
  async deleteInventory(@Param('id') id: string) {
    return this.inventoryService.delete(id);
  }
}
