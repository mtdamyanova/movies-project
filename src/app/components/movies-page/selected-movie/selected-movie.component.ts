import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');
    this.moviesService
      .getMovie(this.title)
      .subscribe((movie) => (this.movie = movie));
  }

  onMouseOver() {
    this.hoverDescription = true;
  }

  onMouseLeave() {
    this.hoverDescription = false;
  }

  onEdit() {
    this.router.navigate([`../${this.title}/edit`], {
      relativeTo: this.route,
    });
  }
}
