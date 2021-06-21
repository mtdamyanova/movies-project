import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { SelectedMovieComponent } from './components/movies-page/selected-movie/selected-movie.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'movies', component: MoviesPageComponent
  },
  { path: 'movies/:title', component: SelectedMovieComponent }
];

export const MyRouteRoutes = RouterModule.forRoot(routes);
