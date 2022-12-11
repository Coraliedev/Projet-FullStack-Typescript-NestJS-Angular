import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CheckauthorInterceptor } from 'src/checkauthor/checkauthor.interceptor';
import { ArticlesService } from './articles.service';
import { UpdateArticleDto } from './dto/update-article.dto';

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

  @Delete(':id')
  async deleteArticle(@Param('id') id: string) {
    return this.articlesServices.delete(id);
  }

  @Put(':id')
  async updateArticle(@Param('id') id: string, @Body() article: UpdateArticleDto) {
    return this.articlesServices.update(id, article);
  }
}
