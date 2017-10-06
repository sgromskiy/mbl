import { Injectable } from '@angular/core';
import { Review } from '../shared/models/review';
import { HttpClient } from '@angular/common/http';
//import { ErrorBusService } from '../error-bus/error-bus.service';
import { Observable } from 'rxjs';
import  'rxjs/add/operator/catch';

@Injectable()
export class ReviewService {
  constructor(
    private http: HttpClient,
    //private bus: ErrorBusService
  ) { }


  getReviewsByBookId(id: string): Observable<Review[]> {
     return this.http.get(`/comments?q={"BookID":"${id}"}`)
  }

  addReview(newReview: Review): Observable<Review> {
    return this.http.post('/comments', newReview);
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
