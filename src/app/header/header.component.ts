import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import 'rxjs/add/operator/skipWhile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  //@Input() user;
  user;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    console.log('init header');
    this.auth.user$.subscribe(
      user => { console.log('header got user', user, typeof user._id ); this.user = user;}
    );
  }

}
