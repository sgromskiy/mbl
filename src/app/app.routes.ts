import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BookComponent } from './book/book.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './auth/auth.service';
import { ProfileResolver } from './profile/profile.resolver';
import { BookResolver } from './book/book.resolver';
import { ReviewResolver } from './review/review.resolver';

export const ROUTES: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthService], children: [
    {path: 'home', component: HomeComponent, },
    {path: 'user/:userId', component: ProfileComponent, resolve: { user: ProfileResolver}},
    {path: 'book/:bookId', component: BookComponent, resolve: { 
      book: BookResolver,
      user: ProfileResolver,
      reviews: ReviewResolver
    }}
  ]},
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
