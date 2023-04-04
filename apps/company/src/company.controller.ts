import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompanyDto } from '../dto/company.dto';
import { CompanyService } from './company.service';
import { SubCompanyDto } from './subcompany/dto/subcompany.dto';
import { SubcompanyService } from './subcompany/subcompany.service';

@Controller('company')
export class CompanyController {
  constructor(
    private readonly companyService: CompanyService,
    private readonly subcompanyService: SubcompanyService,
  ) {}

  @Get('subcompany')
  async getSubCompanies() {
    return this.subcompanyService.get();
  }

  @Get('subcompany/:id')
  async getSubCompany(@Param('id') id: string) {
    return this.subcompanyService.getById(id);
  }

  @Post('subcompany')
  async createSubCompany(
    @Body() dto: SubCompanyDto,
  ) {
    return this.subcompanyService.create({
      data: {
        ...dto,
      },
    });
  }

  @Patch('subcompany/:id')
  async updateSubCompany(
    @Param('id') id: string,
    @Body() dto: SubCompanyDto,
  ) {
    return this.subcompanyService.update(id, dto);
  }

  @Delete('subcompany/:id')
  async deleteSubCompany(
    @Param('id') id: string,
  ) {
    return this.subcompanyService.delete(id);
  }

  @Get('company')
  async getCompanies() {
    return this.companyService.getCompany();
  }

  @Get('company/:id')
  async getCompany(@Param('id') id: string) {
    return this.companyService.getCompanyById(id);
  }

  @Post('company')
  async createCompany(@Body() dto: CompanyDto) {
    return this.companyService.createCompany(dto);
  }

  @Patch('company/:id')
  async updateCompany(
    @Param('id') id: string,
    @Body() dto: CompanyDto,
  ) {
    return this.companyService.updateCompany(
      id,
      dto,
    );
  }

  @Delete('company/:id')
  async deleteCompany(@Param('id') id: string) {
    return this.companyService.delete(id);
  }

  // @EventPattern('company_created')
  // handleCompanyCreated(
  //   data: CompanyCreatedEvent,
  // ) {
  //   this.companyService.handleCompanyCreated(
  //     data,
  //   );
  // }

  // @MessagePattern({ cmd: 'get_company' })
  // getCompany() {
  //   return this.companyService.getCompany();
  // }
}
