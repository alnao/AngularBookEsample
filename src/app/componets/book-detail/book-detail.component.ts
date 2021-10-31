import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-book-detail',
    template: `
      <div *ngIf="book" class="row">
        <div class="col-lg-8 col-md-10 mx-auto">

          <div class="post-preview">
            <h2 class="post-title">{{book.title}}</h2>
            <small class="post-meta">
              di {{book.author}}
            </small>
            <small class="post-subtitle">
              <br>
              € {{book.price | number: '1.2-2'}}
            </small>
            <small class="post-subtitle">
              <br>
              Isbn: {{book.isbn}}
            </small>
            <p class="post-title bellottaFont">
              {{book.description}}
            </p>
          </div>
        </div>
      </div>
      <button class="btn btn-info" (click)="goBack()">Indietro</button>
    `,
    styles: [``]
})
export class BookDetailComponent implements OnInit {
  book : Book;
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private location : Location
  ) { }
  goBack():void{
    this.location.back();
  }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id);
    let id=this.activatedRoute.snapshot.params.id;
    this.bookService.getId(id)
      .subscribe(response => this.book=response); 
  }

}
