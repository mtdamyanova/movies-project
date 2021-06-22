import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie.model';
import { DataStorageService } from 'src/app/shared/services/data-store.service';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit {
  movies: any;
  private subscription: Subscription;
  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    // this.movies = this.movieService.getMovies();
    // this.movieService.moviesChanged.subscribe(
    //   (movies: any) => {
    //     const moviesArr: Movie[] = [];
    //     for (let key in movies) {
    //       if (movies.hasOwnProperty(key)) {
    //         moviesArr.push(movies[key]);
    //       }
    //     }
    //     console.log(moviesArr);
    //     this.movies = moviesArr;
    //   }
    // );
  }

  // getMovies(): Observable<any> {
  //   return this.movieService.moviesChanged;
  // }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
