import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345678',
  database: 'mytestdb',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'], // this is the path to our migration in the dist folder after we build the app
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
