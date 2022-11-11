import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { CheckauthorInterceptor } from 'src/checkauthor/checkauthor.interceptor';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesServices: ArticlesService) {}

  @Post()
  @UseInterceptors(CheckauthorInterceptor)
  async createArticle(@Body() createArticleDto) {
    return this.articlesServices.create(createArticleDto);
  } 

  @Get()
  async findAll() {
    return this.articlesServices.findAll();
  }

}
