import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor( private route: ActivatedRoute ) { 

   }

  ngOnInit() {
    this.route.data.subscribe(({user}) => this.user = user);
  }

}
