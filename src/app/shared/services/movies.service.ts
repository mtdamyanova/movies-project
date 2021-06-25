import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviesChanged = new Subject<any>();
  theMovies = this.moviesChanged.asObservable();
  private movies: any;

  constructor(private http: HttpClient) { }

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
  
}
