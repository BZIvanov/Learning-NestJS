import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  create(createPostDto: CreatePostDto) {
    return createPostDto;
  }

  findAll() {
    return `This action returns all posts`;
  }
}
