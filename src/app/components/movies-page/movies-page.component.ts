import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/services/data-store.service';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { getMoviesArr } from 'src/app/common/utils';

@Component({
  selector: 'app-movie',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit {
  movies: any;
  subscription: Subscription;
  isTableView: boolean = true;

  constructor(
    private moviesService: MoviesService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
    console.log(this.movies);
    this.movies = getMoviesArr(this.movies);
   this.moviesService.moviesChanged.subscribe((movies: any) => {
      this.movies = movies;
    });
    console.log(this.movies);
    console.log(this.isTableView);
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

  onDelete(title) {
    this.dataStorageService.deleteMovie(title);
    this.moviesService.deleteMovie(title);
    this.movies = getMoviesArr(this.movies);
  }

  onChangeView() {
    this.isTableView = !this.isTableView;
    console.log(this.isTableView);
  }
}