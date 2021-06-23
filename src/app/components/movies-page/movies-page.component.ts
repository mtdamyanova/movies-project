import { Subscription } from 'rxjs';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { DataStorageService } from 'src/app/shared/services/data-store.service';
import { MoviesService } from 'src/app/shared/services/movies.service';

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
    this.getMoviesArr();
   this.moviesService.moviesChanged.subscribe((movies: any) => {
      this.movies = movies;
    });
    console.log(this.movies);
    console.log(this.isTableView);
  }

  getMoviesArr() {
    const moviesArr: Movie[] = [];
    for (let key in this.movies) {
      if (this.movies.hasOwnProperty(key)) {
        moviesArr.push(this.movies[key]);
      }
    }
    this.movies = moviesArr;
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
    this.moviesService.deleteMovie(title);
    this.dataStorageService.deleteMovie(title);
    this.getMoviesArr();
  }

  onChangeView() {
    this.isTableView = !this.isTableView;
    console.log(this.isTableView);
  }
}