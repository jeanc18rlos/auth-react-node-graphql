import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.enableCors({
    origin: process.env.CLIENT_ALLOWED_ORIGIN,
  });
  await app.listen(process.env.API_PORT);
}
bootstrap();
