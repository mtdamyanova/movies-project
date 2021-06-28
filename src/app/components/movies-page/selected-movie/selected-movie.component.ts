import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css'],
})
export class SelectedMovieComponent implements OnInit, OnDestroy {
  movie: Movie;
  title: string;
  hoverDescription: boolean = false;
  private destroy$ = new Subject();

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');
    this.moviesService.moviesArray
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.movie = res.filter(mov => mov.title === this.title)[0];
      });
    
    // setTimeout(() => {this.movie = this.moviesService.getMovie(this.title)}, 1000);
  }


  onMouseOver() {
    this.hoverDescription = true;
  }

  onMouseLeave() {
    this.hoverDescription = false;
  }

  onEdit() {
    this.router.navigate([`../../${this.title}/edit`], {
      relativeTo: this.route,
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
