import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent{
  @Input() books;
  @Input() user?;
  mediaURL: string;

  constructor() { 
    this.mediaURL = 'https://mybooklib-7af0.restdb.io/media/';
  }

  isFavorite(bookID) {
  	console.log('fff')
    return this.user.Favorite.includes(bookID);
  }

  isRead(bookID) {
    return this.user.Read.includes(bookID);
  }

}
