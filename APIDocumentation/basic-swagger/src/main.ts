import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import {
  DocumentBuilder,
  SwaggerModule,
} from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  const documentConfig = new DocumentBuilder()
    .setTitle("My Posts App")
    .setDescription("API for managing posts")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(
    app,
    documentConfig
  );
  // http://localhost:3000/api this is how we specify the endpoint on which we can access our documentation
  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
