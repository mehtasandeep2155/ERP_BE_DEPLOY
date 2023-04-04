import { NestFactory } from '@nestjs/core';
import { ModuleModule } from './module.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from '../../swagger/swagger';
import 'reflect-metadata';
require('dotenv').config();

(async () => {
  const app = await NestFactory.create(
    ModuleModule,
    { cors: true },
  );
  SwaggerModule.setup(
    'module/api',
    app,
    createDocument(app),
  );
  await app.startAllMicroservices();
  await app.listen(
    process.env.MODULE_PORT || 3400,
  );
  console.info(
    'SERVER IS RUNNING ON PORT',
    process.env.MODULE_PORT || 3400,
  );
})();
