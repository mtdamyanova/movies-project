import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';


@Component({
  selector: 'app-movie-by-director',
  templateUrl: './movie-by-director.component.html',
  styleUrls: ['./movie-by-director.component.css'],
})
export class MovieByDirectorComponent implements OnInit, OnDestroy {
  movies: any;
  moviesByDirector: Movie[] = [];
  director: string;
  private destroy$ = new Subject();

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.director = this.route.snapshot.paramMap.get('director');

    this.moviesService.moviesArray
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.moviesByDirector = res.filter(mov => mov.director === this.director);
      });
      
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
