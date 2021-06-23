import { Component } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  movies: any;

  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();

    const moviesArr: Movie[] = [];
    for (let key in this.movies) {
      if (this.movies.hasOwnProperty(key)) {
        moviesArr.push(this.movies[key]);
      }
    }
    this.movies = moviesArr;
  }
  
}
