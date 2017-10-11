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
   const id = localStorage.getItem('id_user');
    const u = this.homeService.getUser(id);
    const b = this.homeService.getBooks();
    return Observable.zip(u, b, function(s1, s2){
      return {
        user: s1,
        books: s2
      }
    });
  }
}
