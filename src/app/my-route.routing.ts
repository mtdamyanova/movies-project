import { Routes, RouterModule } from '@angular/router';
import { AddNewMovieComponent } from './components/add-or-edit-movie/add-or-edit-movie.component';
import { SignInComponent } from './components/header/sign-in/sign-in.component';
import { SignUpComponent } from './components/header/sign-up/sign-up.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MovieByDirectorComponent } from './components/movies-page/movie-by-director/movie-by-director.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { SelectedMovieComponent } from './components/movies-page/selected-movie/selected-movie.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movies', component: MoviesPageComponent },
  { path: 'new', component: AddNewMovieComponent },
  { path: 'movies/director/:director', component: MovieByDirectorComponent },
  { path: 'movies/:title', component: SelectedMovieComponent },
  { path: 'movies/:title/edit', component: AddNewMovieComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent }
];

export const MyRouteRoutes = RouterModule.forRoot(routes);
