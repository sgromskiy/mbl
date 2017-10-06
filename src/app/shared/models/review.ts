
export class Review {
  _id: any;
  AuthorName: string;
  Comment: string;
  AuthorID: string;
  BookID: string;
  Rating: number;
  Posted: string;

  constructor(data) {
    this._id = data._id;
    this.AuthorName = data.AuthorName;
    this.Comment = data.Comment;
    this.AuthorID = data.AuthorID;
    this.BookID = data.BookID;
    this.Rating = data.Rating;
    this.Posted = data.Posted;
  }
} 