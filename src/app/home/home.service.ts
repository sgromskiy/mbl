import { Injectable } from '@angular/core';
import { Book } from '../shared/models/book';
import { User } from '../shared/models/user';
import { Author } from '../shared/models/author';
import { HttpClient } from '@angular/common/http';
//import { ErrorBusService } from '../error-bus/error-bus.service';
import { Observable, ReplaySubject } from 'rxjs';
import  'rxjs/add/operator/catch';

@Injectable()
export class HomeService {
  books$;
  booksSubject;
  isBooksLoaded: boolean;

  authors$;
  authorsSubject;
  isAuthorsLoaded: boolean;

  genres$;
  genresSubject;
  isGenresLoaded: boolean;

  constructor(
    private http: HttpClient,
    //private bus: ErrorBusService
  ) {
    this.booksSubject = new ReplaySubject(1);
    this.books$ = this.booksSubject.asObservable();
    this.isBooksLoaded = false;

    this.authorsSubject = new ReplaySubject(1);
    this.authors$ = this.authorsSubject.asObservable();
    this.isAuthorsLoaded = false;

    this.genresSubject = new ReplaySubject(1);
    this.genres$ = this.genresSubject.asObservable();
    this.isGenresLoaded = false;
   }

  // getBooks(): Observable<Book[]> {
  //    return this.http.get('/books')
  // }

  getBooks(): Observable<Book[]>{
    if(!this.isBooksLoaded) {
      this.http.get('/books').subscribe(
        (books) => {
          this.booksSubject.next(books);
          this.isBooksLoaded = true;
         }
      )
    }
    return this.books$;
  }

  getUser(id): Observable<User> {
     return this.http.get(`/users/${id}`);
  }

  // getAuthors(): Observable<Author[]> {
  //    return this.http.get('/authors');
  // }


  getAuthors(): Observable<Author[]> {
    if(!this.isAuthorsLoaded) {
      this.http.get('/authors').subscribe(
        (authors) => {
          this.authorsSubject.next(authors);
          this.isAuthorsLoaded = true;
         }
      )
    }
    return this.authors$;
  }

  // getGenres(): Observable<any[]> {
  //    return this.http.get('/genres');
  // }


  getGenres(): Observable<any[]> {
    if(!this.isGenresLoaded) {
      this.http.get('/genres').subscribe(
        (genres) => {
          this.genresSubject.next(genres);
          this.isGenresLoaded = true;
         }
      )
    }
    return this.genres$;
     
  }

  getAllHomeData(): Observable<any> {
    const id = localStorage.getItem('id_user');
    console.log('why', id);
    //const u = this.getUser(id);
    const b = this.getBooks();
    const a = this.getAuthors();
    const g = this.getGenres();
    return Observable.zip( b, a, g, function(s1, s2, s3){
      return {
        //user: s1,
        books: s1,
        authors: s2,
        genres: s3
      }
    });
  }
  // getProjects(): Observable<User[]> {
  //   return this.http.get('/api/projects').catch(err => this.bus.errorHandler(err));
  // }

  // getProject(id): Observable<Project> {
  //   return this.http.get(`/api/projects/${id}`).catch(err => this.bus.errorHandler(err));
  // }

  // createProject(newProject): Observable<Project> {
  //   return this.http.post('/api/projects', newProject).catch(err => this.bus.errorHandler(err));
  // }

  // updateProject(project): Observable<Project> {
  //   return this.http.put('/api/projects', project).catch(err => this.bus.errorHandler(err));
  // }

  // deleteProject(id): Observable<number>{
  //   return this.http.delete(`/api/projects/${id}`).catch(err => this.bus.errorHandler(err));
  // }

}
