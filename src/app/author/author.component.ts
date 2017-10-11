import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../shared/models/author';
import { Book } from '../shared/models/book';
import { Config_API } from '../api.config';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  author: Author;
  books: Book[] = [];
  mediaURL: string; 

  constructor(
    private route: ActivatedRoute,
    private service: AuthorService
  ) {
    this.mediaURL = Config_API.mediaURL;
  }

  ngOnInit() {
    this.route.data.subscribe(({author}) => {
      this.author = author;
      if (author.Books.length > 0) {
        this.service.getBooksById(author.Books).subscribe((books) => this.books = books);
      } else {
        this.books = [];
      }
    });
  }

}
