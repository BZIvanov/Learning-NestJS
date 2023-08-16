import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostEntity } from './entities/post.entity';

@ApiTags('Posts endpoints') // the group title for the posts endpoints
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: 'Create new post' }) // the info text for the specific endpoint
  @ApiResponse({
    status: 201,
    description: 'The newly created post',
    type: PostEntity,
  }) // we can see these details after expanding the details for the specific endpoint
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({
    status: 200,
    description: 'List with posts',
    type: PostEntity,
    isArray: true, // this way we can specify it will be a list of posts
  })
  @Get()
  findAll() {
    return this.postsService.findAll();
  }
}
