import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.fetchMovies().subscribe();
    this.moviesService.moviesChanged.subscribe(
      (movies) => (this.movies = movies)
    );
  }
  ascendingSort(prop: string) {
    if (prop === 'year') {
      this.movies.sort((a, b) => a[prop].slice(a[prop].lastIndexOf('-')) > b[prop].slice(b[prop].lastIndexOf('-')) ? -1 : 1);
    } else {
      this.movies.sort((a, b) => a[prop].toLowerCase() > b[prop].toLowerCase() ? -1 : 1)
    }
  }
  descendingSort(prop: string) {
    if (prop === 'year') {
      this.movies.sort((a, b) => a[prop].slice(a[prop].lastIndexOf('-')) > b[prop].slice(b[prop].lastIndexOf('-')) ? 1 : -1);
    } else {
      this.movies.sort((a, b) => a[prop].toLowerCase() > b[prop].toLowerCase() ? 1 : -1)
    }
  }

}
