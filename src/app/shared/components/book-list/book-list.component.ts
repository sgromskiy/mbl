import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent{
  @Input() books;
  mediaURL: string;

  constructor() { 
    this.mediaURL = 'https://mybooklib-7af0.restdb.io/media/';
  }

}
