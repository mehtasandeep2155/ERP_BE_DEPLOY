import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { ApiMainServiceModule } from './api-main-service.module';
import 'reflect-metadata';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from 'apps/swagger/swagger';

require('dotenv').config();

dotenv.config();

// let cachedServer;

// export const handler = async (event, context) => {
//   if (!cachedServer) {
//     const nestApp = await NestFactory.create(
//       ApiMainServiceModule,
//       { cors: true },
//     );
//     nestApp.useGlobalPipes(
//       new ValidationPipe({
//         whitelist: true,
//       }),
//     );
//     SwaggerModule.setup(
//       'main/api',
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
    ApiMainServiceModule,
  );
  SwaggerModule.setup(
    'main/api',
    app,
    createDocument(app),
  );
  await app.startAllMicroservices();
  // await app.listen(
  //   process.env.MODULE_PORT || 3400,
  // );
  // console.info(
  //   'SERVER IS RUNNING ON PORT',
  //   process.env.MODULE_PORT || 3400,
  // );
  await app.listen(4000);
  console.info('SERVER IS RUNNING ON PORT', 4000);
})();
