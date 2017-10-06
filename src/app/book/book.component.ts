import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/models/book';
import { User } from '../shared/models/user';
import { Review } from '../shared/models/review';
import { BookService } from './book.service';

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
    private service: BookService
   ) { 
    this.mediaURL = 'https://mybooklib-7af0.restdb.io/media/';
  }

  ngOnInit() {
    this.route.data.subscribe(({book, user, reviews}) => { 
      this.book = book;
      this.user = user;
      this.reviews = reviews;
      this.checkFavorite(book._id);
      this.checkRead(book._id);
    });
  }

  checkFavorite(id) {
    this.isFavorite = this.user.Favorite.filter( b => b._id === id ).length > 0;
  }

  checkRead(id) {
    this.isRead = this.user.Read.filter( b => b._id === id ).length > 0;
  }

  removeFromFav(){
    this.service.removeFromFav(this.book._id).subscribe(
        () => {
          this.user.Favorite = this.user.Favorite.filter(bookId =>  bookId !== this.book._id);
          this.isFavorite = !this.isFavorite;
        }
    );
  }

}
