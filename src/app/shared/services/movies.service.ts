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
  // movies: Movie[] = [];
  movies: any;

  constructor(private http: HttpClient) {}

  // setMovies(movies: Movie[]) {
  //   this.movies = movies;
  //   this.moviesChanged.next(this.movies.slice());
  // }

  getMovies() {
    // return this.http
    //   .get<{ [key: string]: Movie }>(
    //     'https://angular-project-e49e1-default-rtdb.firebaseio.com/movies.json'
    //   )
    //   .pipe(
    //     map((response) => {
    //       const movies: Movie[] = [];
    //       for (let key in response) {
    //         if (response.hasOwnProperty(key)) {
    //           movies.push(response[key]);
    //         }
    //       }
    //       this.moviesChanged.next(movies);
    //     })
    //   );

    return this.http
    .get<any>(
      'https://angular-project-e49e1-default-rtdb.firebaseio.com/movies.json'
    )
    .pipe(
      map((response) => { 
        this.moviesChanged.next(response);
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

  getMovie(index: number) {
    return this.movies[index];
  }
}
