import { Injectable } from '@angular/core';
import { Book } from '../shared/models/book';
import { User } from '../shared/models/user';
import { Author } from '../shared/models/author';
import { HttpClient } from '@angular/common/http';
//import { ErrorBusService } from '../error-bus/error-bus.service';
import { Observable } from 'rxjs';
import  'rxjs/add/operator/catch';

@Injectable()
export class HomeService {
  constructor(
    private http: HttpClient,
    //private bus: ErrorBusService
  ) { }

  getBooks(): Observable<Book[]> {
     return this.http.get('/books')
  }

  getUser(id): Observable<User> {
     return this.http.get(`/users/${id}`);
  }

  getAuthors(): Observable<Author[]> {
     return this.http.get('/authors');
  }

  getGenges(): Observable<any[]> {
     return this.http.get('/genres');
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
