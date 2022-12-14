import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ArticleService } from 'src/app/admin/article.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-article-summary',
  templateUrl: './article-summary.component.html',
  styleUrls: ['./article-summary.component.css'],
})

export class ArticleSummaryComponent implements OnInit {

  isWaitingForServerResponse = false;
  error = null;

  @Output() deleteSuccess = new EventEmitter<boolean>();

  @Input()
  article!: Article;
  isInEditMode = false;


  constructor(public articleService: ArticleService, public authService: AuthService) {}

  ngOnInit(): void {}

  delete(article: Article) {
    this.isWaitingForServerResponse = true;
    this.articleService
      .deleteArticle(article)
      .pipe(catchError(this.handleError))
      .subscribe(data => {
        this.isWaitingForServerResponse = false;
        this.handleSuccess(data);
      }, err => {
        this.isWaitingForServerResponse = false;
        this.handleError(err);
      });
  }

  handleError(err: any) {
    this.error = err;
    return throwError(this.error);
  }

  handleSuccess(data: any) {
    console.log('success', data);
    this.deleteSuccess.emit(true);
  }

  toggleReadMode() {
    this.isInEditMode = !this.isInEditMode;
  }
}
