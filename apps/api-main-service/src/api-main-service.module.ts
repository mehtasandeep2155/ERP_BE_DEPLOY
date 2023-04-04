import { Module } from '@nestjs/common';
import { ApiMainServiceController } from './api-main-service.controller';
import { ApiMainServiceService } from './api-main-service.service';

@Module({
  imports: [],
  controllers: [ApiMainServiceController],
  providers: [ApiMainServiceService],
})
export class ApiMainServiceModule {}
