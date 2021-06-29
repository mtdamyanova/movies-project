import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit, OnDestroy {
  public movies: any;
  private destroy$ = new Subject();
  public cardsViewOn: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //TODO: is this trueee?
    this.route.queryParams.subscribe((params) => {
      this.cardsViewOn = params.cardsView === 'true' ? true : false;
      // this.toggleView(this.cardsViewOn);
    });

    this.moviesService.moviesArray
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.movies = res;
      });
  }

  toggleView(isCardView: boolean) {
    //TODO: is this trueee?
    this.cardsViewOn = isCardView;
    this.router.navigateByUrl(`/movies?cardsView=${this.cardsViewOn}`);
  }

  sortMovies(data) {
    if (data.prop === 'year' && data.type === 'asc') {
      this.movies.sort((a: Movie, b: Movie) =>
        moment(a.year, 'DD-MM-YYYY').diff(moment(b.year, 'DD-MM-YYYY'))
      );
    } else if (data.prop === 'year' && data.type === 'desc') {
      this.movies.sort((a: Movie, b: Movie) =>
        moment(b.year, 'DD-MM-YYYY').diff(moment(a.year, 'DD-MM-YYYY'))
      );
    } else if (data.prop === 'title' && data.type === 'asc') {
      this.movies.sort((a: Movie, b: Movie) =>
        a[data.prop].toLowerCase() > b[data.prop].toLowerCase() ? -1 : 1
      );
    } else {
      this.movies.sort((a: Movie, b: Movie) =>
        a[data.prop].toLowerCase() > b[data.prop].toLowerCase() ? 1 : -1
      );
    }
  }

  deleteMovie(prop: string) {
    this.moviesService.deleteMovie(prop);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
