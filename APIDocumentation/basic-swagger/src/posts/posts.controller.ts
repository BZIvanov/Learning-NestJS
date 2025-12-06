import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { PostResponseDto } from './dto/post-response.dto';
import { CreatePostDto } from './dto/create-post.dto';

@ApiTags('Posts') // the group title for the posts endpoints
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: 'Create a new post' }) // the info text for the specific endpoint
  @ApiResponse({
    status: 201,
    description: 'Returns the newly created post',
    type: PostResponseDto,
  }) // we can see these details after expanding the details for the specific endpoint
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of posts',
    type: PostResponseDto,
    isArray: true, // this way we can specify it will be a list of posts
  })
  @Get()
  findAll() {
    return this.postsService.findAll();
  }
}
