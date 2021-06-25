import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit, OnDestroy, AfterViewInit {
  public movies: any;
  private destroy$ = new Subject();

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.moviesArray
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.movies = res;
      });
    console.log(this.movies, 'v parent componenta');
  }
  ngAfterViewInit() {
    console.log(this.movies, 'vyv view init');
  }

  ascendingSort(prop: string) {
    // TODO Use Lodash and Momentjs
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
    this.moviesService.deleteMovie(prop);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
