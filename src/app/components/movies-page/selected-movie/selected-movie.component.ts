import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css'],
})
export class SelectedMovieComponent implements OnInit {
  movie: Movie;
  title: string;
  hoverDescription: boolean = false;
  constructor(
    public moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');
    // this.movie = this.moviesService.getMovie(this.title);
    this.moviesService.moviesArray.subscribe((movies) => {
      this.movie = movies.filter((data) => data.title == this.title)[0];
    });
  }

  onMouseOver() {
    this.hoverDescription = true;
  }

  onMouseLeave() {
    this.hoverDescription = false;
  }
}
