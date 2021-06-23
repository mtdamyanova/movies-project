import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';


@Component({
  selector: 'app-movie-by-director',
  templateUrl: './movie-by-director.component.html',
  styleUrls: ['./movie-by-director.component.css'],
})
export class MovieByDirectorComponent implements OnInit {
  movies: any;
  moviesByDirector: Movie[] = [];
  director: string;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.director = this.route.snapshot.paramMap.get('director');

    this.movies = this.moviesService.getMovies();

    const moviesArr: Movie[] = [];
    for (let key in this.movies) {
      if (this.movies.hasOwnProperty(key)) {
        moviesArr.push(this.movies[key]);
      }
    }
    this.movies = moviesArr;
    this.moviesService.moviesChanged.subscribe((movies: any) => {
      this.movies = movies;
    });

    this.moviesByDirector = this.movies.filter(movie => movie.director === this.director);
    console.log(this.moviesByDirector);
  }
}
