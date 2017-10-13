import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from './profile.service';
import { BookService } from '../book/book.service';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ProfileResolver implements Resolve<any>{

  constructor(
    private http: HttpClient, 
    private profileService: ProfileService, 
    private bookService: BookService,
    private auth: AuthService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    //const id = (route.params.userId) ? route.params.userId : localStorage.getItem('id_user');
   console.log(route.params.userId)
    
    return this.auth.user$.asObservable().first()
    .switchMap( 
      cUser => {
        if(route.params.userId !== cUser._id){
          return this.profileService.getUser(route.params.userId)
        } else {
          return Observable.of(cUser)
        }
      }
    )
    .switchMap(user => {

      const u = Observable.of(user);
      console.dir(u);
      const arr = [''];
      const f = (user.Favorite.length !== 0) ? this.bookService.getFavoriteBooks(user.Favorite) : Observable.from(arr);
      const r = (user.Read.length !== 0) ? this.bookService.getReadBooks(user.Read) : Observable.from(arr);
      return Observable.zip(u, f, r, function(s1, s2, s3){
        return {
          user: s1,
          favorite: s2,
          read: s3
        }
      });
    });
  }
}
