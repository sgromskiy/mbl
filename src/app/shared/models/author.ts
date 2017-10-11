
export class Author {
  _id: string;
  Name: string;
  Bio: any;
  Genre: any;
  Books: string[];
  Photo: any;

  constructor(data) {
    this._id = data._id;
    this.Name = data.Name;
    this.Bio = data.Bio;
    this.Genre = data.Genre || [];
    this.Books = data.Books || [];
    this.Photo = data.Photo;
  }
} 