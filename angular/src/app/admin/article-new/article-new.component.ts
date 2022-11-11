import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
})
export class ArticleNewComponent implements OnInit {
  response$: any;
  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService
  ) {}

  articleForm: FormGroup = this.fb.group({
    title: [''],
    content: [''],
  });

  ngOnInit(): void {}

  async submit() {
    console.log('article submit', this.articleForm.value);
    this.response$ = this.articleService
      .createArticle(this.articleForm.value)
      .subscribe((res) => {
        console.log('res', res);
      });
  }
}
