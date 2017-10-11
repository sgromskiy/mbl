import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BookComponent } from './book/book.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthorComponent } from './author/author.component';
import { AuthService } from './auth/auth.service';
import { ProfileResolver } from './profile/profile.resolver';
import { UserResolver } from './profile/user.resolver';
import { BookResolver } from './book/book.resolver';
import { ReviewResolver } from './review/review.resolver';
import { AuthorResolver } from './author/author.resolver';
import { HomeResolver } from './home/home.resolver';

export const ROUTES: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthService], children: [
    {path: 'home', component: HomeComponent, resolve: {data: HomeResolver}},
    {path: 'user/:userId', component: ProfileComponent, resolve: { data: ProfileResolver}},
    {path: 'author/:authorId', component: AuthorComponent, resolve: { author: AuthorResolver}},
    {path: 'book/:bookId', component: BookComponent, resolve: { 
      book: BookResolver,
      user: UserResolver,
      reviews: ReviewResolver
    }}
  ]},
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
