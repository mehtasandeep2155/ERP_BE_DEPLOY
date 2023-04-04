import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InventoryViewDto } from './dto/inventoryview.dto';
import { InventoryviewService } from './inventoryview.service';

@Controller('inventoryview')
export class InventoryviewController {
  constructor(
    private readonly inventoryviewService: InventoryviewService,
  ) {}

  // @Get()
  // async getView() {
  //   return this.inventoryviewService.getView();
  // }

  // @Get(':id')
  // async getViewById(@Param('id') id: string) {
  //   return this.inventoryviewService.getViewById(
  //     id,
  //   );
  // }

  // @Post()
  // async createView(
  //   @Body() dto: InventoryViewDto,
  // ) {
  //   return this.inventoryviewService.createView(
  //     dto,
  //   );
  // }

  // @Patch(':id')
  // async updateView(
  //   @Body() dto: InventoryViewDto,
  //   @Param('id') id: string,
  // ) {
  //   return this.inventoryviewService.updateView(
  //     dto,
  //     id,
  //   );
  // }

  // @Delete(':id')
  // async deleteView(@Param('id') id: string) {
  //   return this.inventoryviewService.delete(id);
  // }
}
