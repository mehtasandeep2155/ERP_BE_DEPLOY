import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import 'reflect-metadata';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from 'apps/swagger/swagger';
import { ProductModule } from './product.module';

require('dotenv').config();

dotenv.config();

// let cachedServer;

// export const handler = async (event, context) => {
//   if (!cachedServer) {
//     const nestApp = await NestFactory.create(
//       ProductModule,
//       { cors: true },
//     );
//     nestApp.useGlobalPipes(
//       new ValidationPipe({
//         whitelist: true,
//       }),
//     );
//     SwaggerModule.setup(
//       'product/api',
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

async function bootstrap() {
  const app = await NestFactory.create(
    ProductModule,
    { cors: true },
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  SwaggerModule.setup(
    'product/api',
    app,
    createDocument(app),
  );
  await app.listen(
    process.env.PRODUCT_PORT || 3304,
  );
  console.info(
    'SERVER IS RUNNING ON PORT',
    process.env.PRODUCT_PORT || 3304,
  );
}
bootstrap();
