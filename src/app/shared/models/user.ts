
export class User {
  _id: string | undefined;
  Comments: any;
  Favorite: any;
  Read: any;
  name: string;
  email: string;
  roles: any;
  picture: string;

  constructor(data) {
    this._id = data._id;
    this.Comments = data.Comments || [];
    this.Favorite = data.Favorite || [];
    this.Read = data.Read || [];
    this.name = data.name;
    this.email = data.email;
    this.roles = data.roles;
    this.picture = data.picture;
  }
} 