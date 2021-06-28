import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { MoviesService } from './movies.service';

@Injectable({ providedIn: 'root' })
export class MoviesResolverService implements Resolve<any> {
  constructor(private moviesService: MoviesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let movies: any;
    this.moviesService.moviesArray.subscribe((res) => {
      movies =  res;
      console.log(movies);
    });

    if (movies.length === 0) {
      this.moviesService.getMovies();
      this.moviesService.moviesArray.subscribe((res) => {
        movies =  res;
        console.log(res);
      });
      return movies;
    } else {
      console.log('resolver', movies);

      return movies;
    }
  }
}
