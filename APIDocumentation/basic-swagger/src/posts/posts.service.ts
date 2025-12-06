import { Injectable } from '@nestjs/common';
import { PostResponseDto } from './dto/post-response.dto';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  private posts: PostResponseDto[] = [
    { id: 1, content: 'Hello World' },
    { id: 2, content: 'Second post' },
  ];

  create(createPostDto: CreatePostDto): PostResponseDto {
    const newPost: PostResponseDto = {
      id: this.posts.length + 1,
      content: createPostDto.content,
    };

    this.posts.push(newPost);
    return newPost;
  }

  findAll(): PostResponseDto[] {
    return this.posts;
  }
}
