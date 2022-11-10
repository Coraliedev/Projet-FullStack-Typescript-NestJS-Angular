import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles$: any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.articles$ = this.httpClient.get('http://localhost:3000/articles');
  }

}
