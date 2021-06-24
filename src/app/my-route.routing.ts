import { Routes, RouterModule } from '@angular/router';
import { AddNewMovieComponent } from './components/add-new-movie/add-new-movie.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { SelectedMovieComponent } from './components/movies-page/selected-movie/selected-movie.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movies', component: MoviesPageComponent },
  // { path: 'movies', component: MoviesPageComponent, resolve: [MoviesResolverService]  },
  { path: 'new', component: AddNewMovieComponent },
  { path: 'movies/:title', component: SelectedMovieComponent },
  { path: ':title/edit', component: AddNewMovieComponent },
  // { path: ':title/edit', component: AddNewMovieComponent, resolve: [MoviesResolverService] },
];

export const MyRouteRoutes = RouterModule.forRoot(routes);
