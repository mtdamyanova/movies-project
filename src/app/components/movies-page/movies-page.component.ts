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
export class MoviesPageComponent implements OnInit, OnDestroy {

  movies: any;
  private subscription: Subscription;
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    // this.movieService.fetchMovies().subscribe();
   this.subscription=  this.movieService.movies.subscribe(data => console.log(data));

  }

  getMovies(): Observable<Movie[]> {
    return this.movieService.moviesChanged;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
