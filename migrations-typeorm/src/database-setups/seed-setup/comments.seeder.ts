import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Comment } from '../../comments/entities/comment.entity';
import { User } from '../../users/entities/user.entity';

export default class CommentSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const usersRepository = dataSource.getRepository(User);
    const users = await usersRepository.find();

    const commentsRepository = dataSource.getRepository(Comment);

    const commentFactory = factoryManager.get(Comment);

    const comments = await Promise.all(
      Array(10)
        .fill('')
        .map(async () => {
          const made = await commentFactory.make({
            user: faker.helpers.arrayElement(users),
          });
          return made;
        }),
    );

    await commentsRepository.save(comments);
  }
}
