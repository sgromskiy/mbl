import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid email'
  });

  user$ = new Subject();

  constructor(public router: Router, public http: Http, public httpClient: HttpClient ) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      console.dir(authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        let authToken = authResult.idToken;
        let headers = new Headers({ 'Accept': 'application/json' });
        headers.append('Authorization', `Bearer ${authToken}`);
        let options = new RequestOptions({ headers: headers });

        this.http.get('https://mybooklib-7af0.restdb.io/auth/userinfo', options)
        //.map(res => res.json())
        //.switchMap((res) => this.httpClient.get(`/users/${res.json()._id}`))
        //.switchMap((res) => this.httpClient.get('/books'))
        .map(res => res.json())
        .subscribe(
          (data: any) => {
            console.dir(data)
            authResult.userId = data._id;
            this.setSession(authResult);
            this.getCurrentUser().subscribe(
              val => {
                this.user$.next(val);
              })
          }
        );
        
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('id_user', authResult.userId);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('id_user');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getCurrentUser() {
    console.log('run get user');
    console.log(localStorage.getItem('id_user'));
    return this.httpClient.get(`/users/${localStorage.getItem('id_user')}`);
  }

  public canActivate(): boolean {
    console.log(this.isAuthenticated());
     if(this.isAuthenticated()){
       return true;
     } else {
       this.login();
        return false;
     }
  }

}
