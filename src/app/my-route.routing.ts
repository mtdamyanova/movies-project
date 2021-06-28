import { Routes, RouterModule } from '@angular/router';
import { AddNewMovieComponent } from './components/add-new-movie/add-new-movie.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MovieByDirectorComponent } from './components/movies-page/movie-by-director/movie-by-director.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { SelectedMovieComponent } from './components/movies-page/selected-movie/selected-movie.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movies', component: MoviesPageComponent },
  { path: 'new', component: AddNewMovieComponent },
  { path: 'movies/director/:director', component: MovieByDirectorComponent},
  { path: 'movies/:title', component: SelectedMovieComponent},
  { path: ':title/edit', component: AddNewMovieComponent },
];

export const MyRouteRoutes = RouterModule.forRoot(routes);
