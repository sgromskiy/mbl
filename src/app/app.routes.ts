import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './auth/auth.service';

export const ROUTES: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthService], children: [
  	{ path: '', component: MainComponent, children: [
    	{path: 'home', component: HomeComponent}
    	]}
  ]},
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
