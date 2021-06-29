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
  private isLoading$ = new BehaviorSubject<boolean>(false);
  public readonly isLoading = this.isLoading$.asObservable();

  constructor(private apiService: DataStorageService) {
    this.getMovies();
  }

  public getMovies() {
    this.isLoading$.next(true);
    this.apiService
      .fetchMovies()
      .pipe(tap(() => this.isLoading$.next(false)))
      .subscribe((data) => {
        this._movies$.next(data);
        this.isLoading$.next(false);
        console.log(this.isLoading$.getValue(), 11111);
      });
  }

  public addMovie(movie: Movie): void {
    this.apiService.addNewMovie(movie).subscribe((res: Movie) => {
      const obj = {};
      obj[res.title] = res;
      this._movies$.next({
        ...this.movies,
        ...obj,
      });
    });
  }

  public getMovie(title: string): Movie {
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
