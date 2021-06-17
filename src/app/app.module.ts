import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { MyRouteRoutes } from './my-route.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    MoviesPageComponent,
    MovieComponent,
  ],
  imports: [BrowserModule, MyRouteRoutes],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
