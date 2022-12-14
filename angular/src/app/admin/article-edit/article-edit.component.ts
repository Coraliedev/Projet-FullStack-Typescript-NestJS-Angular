import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
})
export class ArticleEditComponent implements OnInit {
  @Input()
  article!: Article;
  articleForm!: FormGroup;
  response$?: any;
  error = null;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.articleForm = this.fb.group({
      title: [this.article.title, Validators.required],
      content: [
        this.article.content,
        [Validators.required, Validators.minLength(4)],
      ],
    });
  }

  get title() {
    return this.articleForm.get('title');
  }

  get content() {
    return this.articleForm.get('content');
  }

  async submit() {
    this.error = null;
    this.response$ = await this.articleService
      .updateArticle(this.article._id, this.articleForm.value)
      .pipe(
        catchError((error) => {
          this.error = error;
          return EMPTY;
        })
      );
  }
}
