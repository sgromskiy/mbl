import { Injectable } from '@angular/core';
import { Book } from '../shared/models/book';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';

@Injectable()
export class HomeResolver implements Resolve<any>{

  constructor(private http: HttpClient, private homeService: HomeService) { }

  resolve() {
    const b = this.homeService.getBooks().first();
    const a = this.homeService.getAuthors().first();
    const g = this.homeService.getGenres().first();
    return Observable.zip( b, a, g, function(s1, s2, s3){
      return {
        books: s1,
        authors: s2,
        genres: s3
      }
    });
  }
}
