import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie.model';
import { DataStorageService } from 'src/app/shared/services/data-store.service';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit, OnDestroy {
  movies: any;
  subscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.movieService.getMovies()
    // .subscribe();
    // this.subscription = this.movieService.moviesChanged.subscribe((res) => {
    //   this.movies = res;
    //   console.log(this.movies, "moviesPage");
    // });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
