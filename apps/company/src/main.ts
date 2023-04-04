import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import 'reflect-metadata';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from 'apps/swagger/swagger';
import { CompanyModule } from './company.module';

require('dotenv').config();

// dotenv.config();

// let cachedServer;

// export const handler = async (event, context) => {
//   if (!cachedServer) {
//     const nestApp = await NestFactory.create(
//       CompanyModule,
//       { cors: true },
//     );
//     nestApp.useGlobalPipes(
//       new ValidationPipe({
//         whitelist: true,
//       }),
//     );
//     SwaggerModule.setup(
//       'company/api',
//       nestApp,
//       createDocument(nestApp),
//     );
//     await nestApp.init();
//     cachedServer = serverlessExpress({
//       app: nestApp.getHttpAdapter().getInstance(),
//     });
//   }

//   return cachedServer(event, context);
// };

// uncomment below code to run in localhost

(async () => {
  const app = await NestFactory.create(
    CompanyModule,
    { cors: true },
  );
  SwaggerModule.setup(
    'company/api',
    app,
    createDocument(app),
  );
  await app.startAllMicroservices();
  await app.listen(
    process.env.COMPANY_PORT || 3302,
  );
  console.info(
    'SERVER IS RUNNING ON PORT',
    process.env.COMPANY_PORT || 3302,
  );
})();
