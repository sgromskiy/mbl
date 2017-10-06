import { Injectable } from '@angular/core';
import { Review } from '../shared/models/review';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReviewService } from './review.service';

@Injectable()
export class ReviewResolver implements Resolve<Review[]>{

  constructor(private http: HttpClient, private service: ReviewService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getReviewsByBookId(route.params.bookId);
  }
}
