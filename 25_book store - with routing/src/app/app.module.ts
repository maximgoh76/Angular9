import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BookListComponent } from './book-list/book-list.component';
import { SelectedBookComponent } from './selected-book/selected-book.component';
import { HomeComponent } from './home/home.component';
import { BookService } from './shared/services/book-service.services';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
 
    { path: 'home', component: HomeComponent },
    { path: 'book', component: SelectedBookComponent },
    { path: 'books', component: BookListComponent },
 
    
    //default path - will redirect the current path to 'home'
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
   // ** is an angular placeholder for any path that does not exist
   { path: '**', component: PageNotFoundComponent }
    
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    MainComponent,
    BookListComponent,
    SelectedBookComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
