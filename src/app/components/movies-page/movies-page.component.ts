import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit, OnDestroy {
  public movies: any;
  private destroy$ = new Subject();

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.moviesArray
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.movies = res;
      });
  }

  sortMovies(data) {
    if (data.prop === 'year' && data.type === 'asc') {
      this.movies.sort((a: Movie, b: Movie) => moment(a.year, 'DD-MM-YYYY').diff(moment(b.year, 'DD-MM-YYYY')));
    } else if (data.prop === 'year' && data.type === 'desc') {
      this.movies.sort((a: Movie, b: Movie) => moment(b.year, 'DD-MM-YYYY').diff(moment(a.year, 'DD-MM-YYYY')));
    } else if (data.prop === 'title' && data.type === 'asc') {
      this.movies.sort((a: Movie, b: Movie) =>
        a[data.prop].toLowerCase() > b[data.prop].toLowerCase() ? -1 : 1
      );
    } else {
      this.movies.sort((a: Movie, b: Movie) =>
        a[data.prop].toLowerCase() > b[data.prop].toLowerCase() ? 1 : -1
      );
    }
  }

  deleteMovie(prop: string) {
    this.moviesService.deleteMovie(prop);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
