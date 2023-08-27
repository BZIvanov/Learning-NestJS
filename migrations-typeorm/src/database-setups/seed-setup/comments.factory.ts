import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Comment } from '../../comments/entities/comment.entity';

export const CommentsFactory = setSeederFactory(Comment, (faker: Faker) => {
  const comment = new Comment();
  comment.content = faker.lorem.sentence();
  return comment;
});
