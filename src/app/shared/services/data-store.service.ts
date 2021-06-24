import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { MoviesService } from './movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}

  fetchMovies(): Observable<{ [key: string]: Movie }> {
    return this.http.get<any>(
      'https://angular-project-e49e1-default-rtdb.firebaseio.com/movies.json'
    );
  }

  addNewMovie(movie: any) {
    return this.http.put(
      `https://angular-project-e49e1-default-rtdb.firebaseio.com/movies/${movie.title}.json`,
      movie
    );
    // .subscribe();
  }

  deleteMovie(title: string) {
    return this.http.delete(
      `https://angular-project-e49e1-default-rtdb.firebaseio.com/movies/${title}.json`
    );
  }
}
