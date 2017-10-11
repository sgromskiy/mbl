import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './http-inerceptor';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { ProfileService } from './profile/profile.service';
import { ProfileResolver } from './profile/profile.resolver';
import { UserResolver } from './profile/user.resolver';
import { BookService } from './book/book.service';
import { BookResolver } from './book/book.resolver';
import { AuthorService } from './author/author.service';
import { AuthorResolver } from './author/author.resolver';
import { HomeService } from './home/home.service';
import { HomeResolver } from './home/home.resolver';
import { CallbackComponent } from './callback/callback.component';
import { BookListComponent } from './shared/components/book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { ReviewComponent } from './review/review.component';
import { ReviewService } from './review/review.service';
import { ReviewResolver } from './review/review.resolver';
import { FormFieldErrorComponent } from './shared/components/form-field-error/form-field-error.component';
import { AuthorComponent } from './author/author.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    CallbackComponent,
    HeaderComponent,
    ProfileComponent,
    BookListComponent,
    BookComponent,
    ReviewComponent,
    FormFieldErrorComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    ProfileService,
    ProfileResolver,
    BookService,
    BookResolver,
    ReviewService,
    ReviewResolver,
    UserResolver,
    AuthorService,
    AuthorResolver,
    HomeService,
    HomeResolver,
   {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
