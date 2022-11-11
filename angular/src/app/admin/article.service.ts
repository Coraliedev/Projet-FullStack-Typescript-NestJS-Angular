import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  createArticle = (article: Article) => {
    return this.httpClient.post<Article>('http://localhost:3000/articles', article);
  }
}