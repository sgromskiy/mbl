import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from './profile.service';

@Injectable()
export class UserResolver implements Resolve<User>{

  constructor(private http: HttpClient, private profileService: ProfileService) { }

  resolve(route: ActivatedRouteSnapshot) {
   const id = (route.params.userId) ? route.params.userId : localStorage.getItem('id_user');
    return this.profileService.getUser(id);
  }
}
