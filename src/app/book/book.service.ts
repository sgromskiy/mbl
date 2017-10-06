import { Injectable } from '@angular/core';
import { Book } from '../shared/models/book';
import { HttpClient } from '@angular/common/http';
//import { ErrorBusService } from '../error-bus/error-bus.service';
import { Observable } from 'rxjs';
import  'rxjs/add/operator/catch';

@Injectable()
export class BookService {
  constructor(
    private http: HttpClient,
    //private bus: ErrorBusService
  ) { }


  getBook(id: string): Observable<Book> {
     return this.http.get(`/books/${id}`)
  }

  removeFromFav(id) {
    return this.http.get();
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
