import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Movie } from '../shared/models/movie.model';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
})
export class AllMoviesComponent implements OnInit {
  movies: Movie[] = [];
  subscription: Subscription;

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    // this.movieService.getMovies().subscribe((movies) => console.log(movies));
    // this.movieService.moviesChanged.subscribe((movies: Movie[]) => {
    //   console.log(movies);
    //   this.movies = movies;
    // });
    // this.movieService.getMovies().subscribe(data=>console.log(data))

    this.movieService.getMovies().subscribe();
    this.movieService.moviesChanged.subscribe((res) => {
      this.movies = res;
      console.log(this.movies);
    });
  }
}
