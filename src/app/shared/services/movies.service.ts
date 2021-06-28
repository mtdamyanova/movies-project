import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { DataStorageService } from './api-movies.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private _movies$ = new BehaviorSubject<any>(null);
  public readonly movies = this._movies$.asObservable();
  public readonly moviesArray = this._movies$
    .asObservable()
    .pipe(map((movies) => this.getMoviesAsArray(movies)));

  constructor(private apiService: DataStorageService) {
    this.getMovies();
  }

  public getMovies() {
    this.apiService.fetchMovies().subscribe((data) => {
      this._movies$.next(data);
      console.log(this._movies$, 'subject-a');
      console.log('constructor', this._movies$.value);
    });
  }

  public addMovie(movie: Movie): void {
    console.log(movie, 'add');
    this.apiService.addNewMovie(movie).subscribe((res: Movie) => {
      const obj = {};
      obj[res.title] = res;
      this._movies$.next({
        ...this._movies$.value,
        ...obj,
      });
    });
  }

  public getMovie(title: string) {
    return this._movies$.value[title];
  }

  public deleteMovie(title: string): void {
    this.apiService.deleteMovie(title).subscribe(() => {
      const currentMovies = this._movies$.value;
      delete currentMovies[title];
      this._movies$.next(currentMovies);
    });
  }

  private getMoviesAsArray(movies) {
    const resultArr = [];
    for (let prop in movies) {
      resultArr.push(movies[prop]);
    }
    return resultArr;
  }
}
