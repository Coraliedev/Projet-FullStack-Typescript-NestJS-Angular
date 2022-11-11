import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly API_URL = 'http://localhost:3000/articles';
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  createArticle = (article: Article) => {
    return this.httpClient.post<Article>(this.API_URL, article);
  };

  deleteArticle = (article: Article) => {
    const fullURL = `${this.API_URL}/${article._id}`;
    return this.httpClient.delete<Article>(fullURL, this.httpHeaders);
  };
}
