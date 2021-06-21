import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { MoviesService } from './movies.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private moviesService: MoviesService) {}

  fetchMovies() {
    return this.http
    .get<any>(
      'https://angular-project-e49e1-default-rtdb.firebaseio.com/movies.json'
    )
    .pipe(
        // map(movies => {
        //   return movies;
        //   }),
        tap(movies => {
            this.moviesService.setMovies(movies);
          })
    );
  }

  addNewMovie(movie: any) {
    this.http
      .put(
        `https://angular-project-e49e1-default-rtdb.firebaseio.com/movies/${movie.title}.json`,
        movie
      ).subscribe();
  }
}