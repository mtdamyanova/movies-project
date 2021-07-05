import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MovieComponent } from './components/movies-page/movie/movie.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { MyRouteRoutes } from './my-route.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/home-page/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectedMovieComponent } from './components/movies-page/selected-movie/selected-movie.component';
import { FilterPipe } from './components/movies-page/filter.pipe';

import { MovieCardComponent } from './components/movies-page/movie-card/movie-card.component';
import { AddNewMovieComponent } from './components/add-or-edit-movie/add-or-edit-movie.component';
import { MovieByDirectorComponent } from './components/movies-page/movie-by-director/movie-by-director.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SignInComponent } from './components/header/sign-in/sign-in.component';
import { SignUpComponent } from './components/header/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HeaderComponent,
    MoviesPageComponent,
    HomePageComponent,
    CarouselComponent,
    MovieComponent,
    SelectedMovieComponent,
    AddNewMovieComponent,
    MovieCardComponent,
    MovieByDirectorComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MyRouteRoutes,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
