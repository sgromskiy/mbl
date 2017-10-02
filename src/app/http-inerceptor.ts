import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTHHEADER = {'x-apikey': '3fc439549e7f49cde9dbf4dbcd9be185e967e'}
//const AUTHHEADER = {'x-apikey': '59cbc17504067cfd77ad9b16'}

//const BASEURL = 'https://mybooklib-7af0.restdb.io/rest'
const BASEURL = '/rest'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({setHeaders: AUTHHEADER, url: BASEURL + req.url});
    return next.handle(newReq);
  }
}