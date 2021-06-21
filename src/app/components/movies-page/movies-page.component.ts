import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit {
  movies: any;
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    const moviesObj = this.moviesService.getMovies();

    const moviesArr: Movie[] = [];
    for (let key in moviesObj) {
      if (moviesObj.hasOwnProperty(key)) {
        moviesArr.push(moviesObj[key]);
      }
    }
    this.movies = moviesArr;
    console.log(this.movies);
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

  deleteMovie(prop: string) {
    // this.deleteMovie();
  }
}
