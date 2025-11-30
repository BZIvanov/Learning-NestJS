import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'; // v4.0.2

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes ConfigModule available everywhere
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
