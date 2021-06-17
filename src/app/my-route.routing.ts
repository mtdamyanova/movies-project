import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "movies", component: MoviesPageComponent}
];

export const MyRouteRoutes = RouterModule.forRoot(routes);
