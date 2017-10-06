
export class Book {
  _id: string | undefined;
  Title: string;
  Genre: any;
  Author: any;
  Description: string;
  Published: string;
  Cover: any;

  constructor(data) {
    this._id = data._id;
    this.Title = data.Title;
    this.Genre = data.Genre || [];
    this.Author = data.Author || [];
    this.Description = data.Description;
    this.Published = data.Published;
    this.Cover = data.Cover;
  }
} 