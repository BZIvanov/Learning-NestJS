import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import * as dotenv from 'dotenv';
import { User } from '../../users/entities/user.entity';
import { Comment } from '../../comments/entities/comment.entity';
import UserSeeder from './users.seeder';
import CommentSeeder from './comments.seeder';
import { UsersFactory } from './users.factory';
import { CommentsFactory } from './comments.factory';

dotenv.config();

(async () => {
  const options: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    // add all app entities below
    entities: [User, Comment],
    // additional config options brought by typeorm-extension
    // the order here matters, we want UserSeeder to be before CommentSeeder, because comments foreign key require users to be seeded first
    seeds: [UserSeeder, CommentSeeder],
    factories: [UsersFactory, CommentsFactory],
  };

  const dataSource = new DataSource(options);

  await dataSource.initialize();

  await runSeeders(dataSource);
})();
