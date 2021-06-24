import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { DataStorageService } from './api-movies.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviesChanged = new BehaviorSubject<any>(null);
  private movies: any;

  constructor(private apiService: DataStorageService) {
    this.setMovies();
  }

  setMovies() {
    this.apiService.fetchMovies().subscribe((data) => {
      this.movies = data;
      this.moviesChanged.next(data);
    });
  }

  getMovies() {
    // return this.movies;
    return this.moviesChanged.asObservable();
  }

  addMovie(movie: Movie) {
    this.apiService
      .addNewMovie(movie)
      .pipe(
        tap(() => {
          const obj = {};
          obj[movie.title] = movie;
          this.moviesChanged.next({
            ...this.movies,
            ...obj,
          });
        })
      )
      .subscribe();
  }

  getMovie(title: string) {
    return this.movies[title];
  }

  deleteMovie(title: string) {
    this.apiService.deleteMovie(title).subscribe(() => {
      delete this.movies[title];
      this.moviesChanged.next(this.movies);
    });
  }
}
