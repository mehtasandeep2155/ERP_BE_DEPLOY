import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StockActionsDto } from './dto/stockactions.dto';
import { StockactionsService } from './stockactions.service';

@Controller('stockactions')
export class StockactionsController {
  constructor(
    private readonly stockActionsService: StockactionsService,
  ) {}

  // @Get()
  // async getAction() {
  //   return this.stockActionsService.get();
  // }

  // @Get(':id')
  // async getActionById(@Param('id') id: string) {
  //   return this.stockActionsService.getById(id);
  // }

  // @Post()
  // async createActions(
  //   @Body() dto: StockActionsDto,
  // ) {
  //   return this.stockActionsService.createActions(
  //     dto,
  //   );
  // }

  // @Patch(':id')
  // async updateActions(
  //   @Param('id') id: string,
  //   @Body() dto: StockActionsDto,
  // ) {
  //   return this.stockActionsService.updateActions(
  //     id,
  //     dto,
  //   );
  // }

  // @Delete(':id')
  // async deleteActions(@Param('id') id: string) {
  //   return this.stockActionsService.delete(id);
  // }
}
