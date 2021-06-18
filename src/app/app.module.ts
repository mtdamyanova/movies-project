import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { MyRouteRoutes } from './my-route.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/home-page/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNewMovieComponent } from './components/add-new-movie/add-new-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesPageComponent,
    HomePageComponent,
    CarouselComponent,
    MovieComponent,
    AddNewMovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MyRouteRoutes,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
