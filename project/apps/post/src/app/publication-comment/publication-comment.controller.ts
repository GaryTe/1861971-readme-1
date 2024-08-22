import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Query
 } from '@nestjs/common';

import { CreateCommentDto } from './dto/creat-comment.dto';
import { Publication } from './dto/id-list.dto';
import { PublicationCommentService } from './publication-comment.service';

@Controller('comment')
export class PublicationCommentController {
  constructor(
    private readonly publicationCommentService: PublicationCommentService
  ) {}

  @Post('create')
  public async create(@Body() dto: CreateCommentDto) {

    const existComment = await this.publicationCommentService.create(dto);
    return existComment
  }

  @Get('list')
  public async index(@Body() {idPost}: Publication, @Query() {count}: {count: string | undefined} ) {

    const commentsList = await this.publicationCommentService.findById(idPost, count);
    return commentsList
  }

  @Delete('delete')
  public async delete(@Body() dataPost: Publication) {
    const {count} = await this.publicationCommentService.delete(dataPost);

     return `Comments have been ${count} deleted`
  }
}
