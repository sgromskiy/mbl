import { Injectable } from '@angular/core';
import { Author } from '../shared/models/author';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthorService } from './author.service';

@Injectable()
export class AuthorResolver implements Resolve<Author>{

  constructor(private http: HttpClient, private service: AuthorService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getAuthor(route.params.authorId);
  }
}
