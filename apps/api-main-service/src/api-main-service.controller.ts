import { Controller, Get } from '@nestjs/common';
import { ApiMainServiceService } from './api-main-service.service';

@Controller('main')
export class ApiMainServiceController {
  constructor(
    private readonly apiMainServiceService: ApiMainServiceService,
  ) {}

  @Get()
  getHello(): object[] {
    return this.apiMainServiceService.getAll();
  }
}
