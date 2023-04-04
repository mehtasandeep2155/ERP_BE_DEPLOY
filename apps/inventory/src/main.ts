import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from 'apps/swagger/swagger';
import { InventoryModule } from './inventory.module';
import { configure as serverlessExpress } from '@vendia/serverless-express';

require('dotenv').config();

dotenv.config();

// let cachedServer;

// export const handler = async (event, context) => {
//   if (!cachedServer) {
//     const nestApp = await NestFactory.create(
//       InventoryModule,
//       { cors: true },
//     );
//     nestApp.useGlobalPipes(
//       new ValidationPipe({
//         whitelist: true,
//       }),
//     );
//     SwaggerModule.setup(
//       'inventory/api',
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
    InventoryModule,
    { cors: true },
  );
  SwaggerModule.setup(
    'inventory/api',
    app,
    createDocument(app),
  );
  await app.startAllMicroservices();
  await app.listen(
    process.env.INVENTORY_PORT || 3305,
  );
  console.info(
    'SERVER IS RUNNING ON PORT',
    process.env.INVENTORY_PORT || 3305,
  );
})();
