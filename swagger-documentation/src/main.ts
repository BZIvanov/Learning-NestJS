import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentConfig = new DocumentBuilder()
    .setTitle('My Posts App')
    .setDescription('Some description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  // http://localhost:3000/api this is how we specify the endpoint on which we can access our documentation
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
