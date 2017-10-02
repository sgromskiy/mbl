import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = {};
  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe( {next:(data) => {
    	console.dir(data);
    	this.user = data;
    }});
  }

}
