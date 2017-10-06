import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../shared/models/review';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() reviews:Review[];
  @Input() BookID;
  @Input() AuthorID;
  @Input() AuthorName;
  newReview: Review;

  constructor(private service: ReviewService) { }

  ngOnInit() {
    this.newReview = new Review({Posted: new Date(), AuthorID: this.AuthorID, AuthorName: this.AuthorName, BookID: this.BookID});
  }

  onSubmit() {
    this.service.addReview(this.newReview).subscribe(
      (added) => this.reviews.push(added)
    );
  }
}
