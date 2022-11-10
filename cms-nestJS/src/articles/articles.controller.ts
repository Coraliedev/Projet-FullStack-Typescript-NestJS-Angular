import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesServices: ArticlesService) {}

  @Post()
  async createArticle(@Body() createArticleDto) {
    return this.articlesServices.create(createArticleDto);
  } 

  @Get()
  async findAll() {
    return this.articlesServices.findAll();
  }

}
