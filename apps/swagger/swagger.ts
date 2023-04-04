import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  OpenAPIObject,
  SwaggerModule,
} from '@nestjs/swagger';
import { SWAGGER_CONFIG } from './swagger.config';

/**
 * Creates an OpenAPI document for an application, via swagger.
 * @param app the nestjs application
 * @returns the OpenAPI document
 */
export function createDocument(
  app: INestApplication,
): OpenAPIObject {
  const builder = new DocumentBuilder()
    .addSecurity('basic', {
      type: 'http',
      scheme: 'basic',
    })
    .setTitle(SWAGGER_CONFIG.title)
    .setDescription(SWAGGER_CONFIG.description)
    .setContact(
      process.env.SWAGGER_CONTACT_NAME,
      process.env.SWAGGER_CONTACT_URL,
      process.env.SWAGGER_CONTACT_EMAIL,
    )
    .setExternalDoc(
      'Project on Github',
      process.env.SWAGGER_PROJECT_DETAILS,
    )
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token',
    )
    .setVersion(SWAGGER_CONFIG.version)
    .addServer(
      process.env.SWAGGER_LOCAL_ENDPOINT,
      'local url',
    )
    .addServer(
      process.env.SWAGGER_STAG_ENDPOINT,
      'stag url',
    );
  // for (const tag of SWAGGER_CONFIG.tags) {
  //   builder.addTag(tag);
  // }
  const options = builder.build();

  return SwaggerModule.createDocument(
    app,
    options,
  );
}
