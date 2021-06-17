import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviesChanged = new Subject<Movie[]>();
  movies = this.moviesChanged.asObservable();

  constructor(private http: HttpClient) {}

  fetchMovies() {
    return this.http
      .get<{ [key: string]: Movie }>(
        'https://angular-project-e49e1-default-rtdb.firebaseio.com/movies.json'
      )
      .pipe(
        map((response) => {
          const movies: Movie[] = [];
          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              movies.push(response[key]);
            }
          }
          this.moviesChanged.next(movies);
        })
      );
  }
}
