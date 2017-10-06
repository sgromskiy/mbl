import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import 'rxjs/add/operator/skipWhile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = {};
  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.skipWhile( user =>  typeof user._id !== "undefined").subscribe(
      (data) => {
        if(data && data.name !== ''){
          this.user = data;
        } else {
          console.log('call me')
          this.auth.getCurrentUser();
        }
    });
  }

}
