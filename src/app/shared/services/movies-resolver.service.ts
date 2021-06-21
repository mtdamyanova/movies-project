import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { MoviesService } from 'src/app/all-movies/movies.service';
import { DataStorageService } from './data-store.service';



@Injectable({ providedIn: 'root' })
export class MoviesResolverService implements Resolve<any> {
  constructor(
    private dataStorageService: DataStorageService,
    private moviesService: MoviesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const movies = this.moviesService.getMovies();

    if (movies) {
      return this.dataStorageService.fetchMovies();
    } else {
      return movies;
    }
  }
}