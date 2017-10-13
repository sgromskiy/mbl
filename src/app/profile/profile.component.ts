import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';
import { Book } from '../shared/models/book';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = new User({});
  favorite: Book[];
  read: Book[];

  constructor( private route: ActivatedRoute ) { 

   }

  ngOnInit() {
    console.log('init prof')
    this.route.data.subscribe(({data}) => {
    	this.user = data.user;
    	this.favorite = data.favorite;
    	this.read = data.read;
    });
  }

}
