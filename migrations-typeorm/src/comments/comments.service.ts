import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private commentsRepository: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const newComment = this.commentsRepository.create(createCommentDto);
    return await this.commentsRepository.save(newComment);
  }

  async findAll(): Promise<Comment[]> {
    return await this.commentsRepository.find();
  }

  async findOne(id: number): Promise<Comment> {
    return await this.commentsRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<Comment> {
    const comment = await this.findOne(id);
    return this.commentsRepository.save({ ...comment, ...updateCommentDto });
  }

  async remove(id: number): Promise<void> {
    const comment = await this.findOne(id);
    await this.commentsRepository.remove(comment);
    return;
  }
}
