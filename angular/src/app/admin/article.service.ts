import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  createArticle = (article: any) => {
    return this.httpClient.post<any>('http://localhost:3000/articles', article);
  }
}
