import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit, OnDestroy {
  movies: any;
  subscription: Subscription;

  constructor(private ms: MoviesService) {}

  ngOnInit() {
    this.subscription = this.ms
      .getMovies()
      .pipe(
        map((data) => {
          const resultArr = [];
          for (let prop in data) {
            resultArr.push(data[prop]);
          }
          return (data = resultArr);
        })
      )
      .subscribe((res) => {
        this.movies = res;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ascendingSort(prop: string) {
    if (prop === 'year') {
      this.movies.sort((a, b) =>
        a[prop].slice(a[prop].lastIndexOf('-')) >
        b[prop].slice(b[prop].lastIndexOf('-'))
          ? -1
          : 1
      );
    } else {
      this.movies.sort((a, b) =>
        a[prop].toLowerCase() > b[prop].toLowerCase() ? -1 : 1
      );
    }
  }

  descendingSort(prop: string) {
    if (prop === 'year') {
      this.movies.sort((a, b) =>
        a[prop].slice(a[prop].lastIndexOf('-')) >
        b[prop].slice(b[prop].lastIndexOf('-'))
          ? 1
          : -1
      );
    } else {
      this.movies.sort((a, b) =>
        a[prop].toLowerCase() > b[prop].toLowerCase() ? 1 : -1
      );
    }
  }

  deleteMovie(prop: string) {
    this.ms.deleteMovie(prop);
  }
}
