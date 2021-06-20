import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movies: any;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe();
    this.moviesService.moviesChanged.subscribe((movies) => {
      const moviesArr: Movie[] = [];
      for (let key in movies) {
        if (movies.hasOwnProperty(key)) {
          moviesArr.push(movies[key]);
        }
      }
      this.movies = moviesArr;
    });
  }
}
