import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // dynamically load different env file depending on the environment variable which is provided for the scripts in the package.json file
      envFilePath: [`.env.${process.env.NODE_ENV || 'development'}`],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get<string>('DATABASE_HOST'),
          port: configService.get<number>('DATABASE_PORT'),
          username: configService.get<string>('DATABASE_USERNAME'),
          password: configService.get<string>('DATABASE_PASSWORD'),
          database: configService.get<string>('DATABASE_NAME'),
          autoLoadEntities: true,
          synchronize: true,
          logging: 'all', // will log all raw queries we are making to the database
          logger: 'file', // will log all queries in a file instead of the console. By default the file is named ormlogs.log and placed in the root folder
        };
      },
    }),
    AuthorsModule,
    BooksModule,
  ],
})
export class AppModule {}
