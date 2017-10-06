import { Injectable } from '@angular/core';
import { Book } from '../shared/models/book';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookService } from './book.service';

@Injectable()
export class BookResolver implements Resolve<Book>{

  constructor(private http: HttpClient, private service: BookService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getBook(route.params.bookId);
  }
}
