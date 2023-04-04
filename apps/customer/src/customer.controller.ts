import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
  ) {}

  @Get('customer')
  getCustomer() {
    return this.customerService.getCustomer();
  }
 
  @Get('customer/:id')
  getCustomerById(@Param('id') id:string) {
    return this.customerService.getCustomerById(id)
  }

  @Post('customer')
  createCustomer(@Body() dto:CustomerDto) {
    return this.customerService.createCustomer(dto)
  }

  @Patch('customer/:id')
  updateCustomer(@Param('id') id:string, @Body() dto:CustomerDto){
    return this.customerService.updateCustomer(id,dto)
  }

  @Delete('customer/:id')
  deleteCustomer(@Param('id') id:string){
    return this.customerService.delete(id)
  }
}
