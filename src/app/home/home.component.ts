import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';
import { Book } from '../shared/models/book';
import { Author } from '../shared/models/author';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;
  books: Book[] = [];
  filteredCollection: Book[] = [];
  authors: Author[] = [];
  genres: any[] = [];
  activeFilters:any[] = [];
  authorFilterVisible:boolean = false; 
  genreFilterVisible: boolean = false;

  constructor(
    public route: ActivatedRoute,
    public service: HomeService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(({data}) => {
       this.user = data.user;
       this.books = data.books;
       this.filteredCollection = [...data.books];
    });
    this.service.getAuthors().subscribe(
      (authors) => {
        this.authors = authors;
        this.authorFilterVisible = true;
      }
    );
    this.service.getGenges().subscribe(
      (genres) => {
        this.genres = genres;
        this.genreFilterVisible = true;
      }
    );
    console.log('init home')
  }

  setAuthorFilter(author) {
    this.activeFilters.push({
      "key": author._id,
      "type": "Author",
      "value": author.Name
    });
    this.refilterCollection();
    this.authorFilterVisible = false;
  }

  setGenreFilter(genre) {
    this.activeFilters.push({
      "key": genre._id,
      "type": "Genre",
      "value": genre.Name
    });
    this.refilterCollection();
    this.genreFilterVisible = false;
  }

  disableFilter(type) {
    if(type === "Author") this.authorFilterVisible = true;
    if(type === "Genre") this.genreFilterVisible = true;
    this.activeFilters = this.activeFilters.filter((filter) => filter.type !== type);
     this.refilterCollection();
  }

  refilterCollection(){
    if(this.activeFilters.length === 0) { this.filteredCollection = this.books; return}
    this.filteredCollection = this.filteredCollection.filter((book) => {
      return this.activeFilters.some((filter) => {
        return book[filter.type].some((el) => { return (el._id === filter.key || el.AuthorID === filter.key)} )
      })
    });
  }

}
