import { NestFactory } from '@nestjs/core';
import { createClient } from 'redis';
import RedisStore from 'connect-redis';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const redisClient = createClient({ url: 'redis://localhost:6379' });
  redisClient.connect().catch(console.error);

  const redisStore = new RedisStore({
    client: redisClient,
    prefix: 'myapp:',
  });

  app.use(
    session({
      store: redisStore,
      secret: 'supersecretstring',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1000 * 60 * 60 },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
