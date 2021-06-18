import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviesChanged = new Subject<Movie[]>();
  movies: Movie[] = [];

  constructor(private http: HttpClient) {}

  getMovies() {
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

  addNewMovie(movie: Movie) {
    this.getMovies().subscribe();
    this.moviesChanged.subscribe((res) => {
      this.movies = res;
      this.movies.push(movie);

      // this.http
      // .put(
      //   'https://angular-project-e49e1-default-rtdb.firebaseio.com/movies.json',
      //   this.movies
      // )
      // .subscribe(response => {
      //   console.log(response);
      // });
    }); 
  }

  getMovie(index: number) {
    return this.movies[index];
  }
}
