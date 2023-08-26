// This is our typeorm configuration for running the migrations
// We are running the migrations separately from the application
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

// setup .env separately, because we can run migrations separately from the application
dotenv.config();

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity.js'], // here will be our js entity files. We are building the project to get the js version of the files, which is needed for typeorm
  migrations: ['dist/db/migrations/*.js'], // this is the path to our migration in the dist folder after we build the app
};

export default new DataSource(dataSourceOptions);
