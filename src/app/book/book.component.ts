import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/models/book';
import { User } from '../shared/models/user';
import { Review } from '../shared/models/review';
import { BookService } from './book.service';
import { AuthService } from '../auth/auth.service';
import { Config_API } from '../api.config'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book: Book;
  user: User;
  reviews: Review[];
  mediaURL: string;
  isFavorite: boolean;
  isRead: boolean;

  constructor(
    private route: ActivatedRoute,
    private service: BookService,
    private auth: AuthService
   ) { 
    this.mediaURL = Config_API.mediaURL;
  }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user);
    this.route.data.subscribe(({book, reviews}) => { 
      this.book = book;
      this.reviews = reviews;
      this.checkFavorite(book._id);
      this.checkRead(book._id);
    });
  }

  checkFavorite(id) {
    this.isFavorite = this.user.Favorite.includes(id);
  }

  checkRead(id) {
    this.isRead = this.user.Read.includes(id);
  }

  removeFromFav(){
    this.service.removeFromFav(this.book._id, this.user).subscribe(
        (user) => {
          this.user = user;
          this.isFavorite = !this.isFavorite;
        }
    );
  }

  addToFav(){
    this.service.addToFav(this.book._id, this.user).subscribe(
        (user) => {
          this.user = user;
          this.isFavorite = !this.isFavorite;
        }
    );
  }

  removeFromRead(){
    this.service.removeFromRead(this.book._id, this.user).subscribe(
        (user) => {
          this.user = user;
          this.isRead = !this.isRead;
        }
    );
  }

  addToRead(){
    this.service.addToRead(this.book._id, this.user).subscribe(
        (user) => {
          this.user = user;
          this.isRead = !this.isRead;
        }
    );
  }

}
