import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import 'reflect-metadata';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from 'apps/swagger/swagger';
import { ValidationPipe } from '@nestjs/common';
import { CustomerModule } from './customer.module';
require('dotenv').config();

dotenv.config();

// let cachedServer;

// export const handler = async (event, context) => {
//   if (!cachedServer) {
//     const nestApp = await NestFactory.create(
//       CustomerModule,
//       { cors: true },
//     );
//     nestApp.useGlobalPipes(
//       new ValidationPipe({ whitelist: true }),
//     );
//     SwaggerModule.setup(
//       'customer/api',
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
    CustomerModule,
    { cors: true },
  );
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }),
  );
  SwaggerModule.setup(
    'customer/api',
    app,
    createDocument(app),
  );
  await app.startAllMicroservices();
  await app.listen(
    process.env.CUSTOMER_PORT || 3306,
  );
  console.info(
    'SERVER IS RUNNING ON PORT',
    process.env.CUSTOMER_PORT || 3306,
  );
})();
