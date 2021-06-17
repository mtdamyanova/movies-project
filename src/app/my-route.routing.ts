import { Routes, RouterModule } from '@angular/router';
import { AddNewMovieComponent } from './components/add-new-movie/add-new-movie.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movies', component: MoviesPageComponent },
  { path: 'new', component: AddNewMovieComponent },
];

export const MyRouteRoutes = RouterModule.forRoot(routes);
