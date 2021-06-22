import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviesChanged = new Subject<any>();
  private movies: any;

  constructor(
    private http: HttpClient,
  ) {}

  setMovies(movies: any) {
    this.movies = movies;
    this.moviesChanged.next(this.movies);
  }

  getMovies() {
    return this.movies;
  }

  getMovie(title: string) {
    return this.movies[title];
  }

  addMovie(title: string, newMovie: any) {
    console.log(this.movies);
    this.movies[title] = newMovie;
    this.moviesChanged.next(this.movies);
  }

  updateMovie(title: string, updatedMovie: any) {
    this.movies[title] = updatedMovie;
    this.moviesChanged.next(this.movies);
  }

  deleteMovie(title: string) {
   delete this.movies[title];
   this.moviesChanged.next(this.movies);
  }
}
