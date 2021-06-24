import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';


import { DataStorageService } from './data-store.service';
import { MoviesService } from './movies.service';



@Injectable({ providedIn: 'root' })
export class MoviesResolverService implements Resolve<any> {
  constructor(
    private dataStorageService: DataStorageService,
    private moviesService: MoviesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const movies = this.moviesService.getMovies();

    if (movies === undefined) {
      return this.dataStorageService.fetchMovies();
    } else {
      return movies;
    }
  }
}