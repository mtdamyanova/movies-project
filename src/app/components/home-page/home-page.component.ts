import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public isChartDisplayed: boolean = false;
  public movies;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.fetchMovies();
  }

  public fetchMovies() {
    this.moviesService.moviesArray.subscribe((data) => (this.movies = data));
  }

  public toggleDisplayChart() {
    this.isChartDisplayed = !this.isChartDisplayed;
  }
}
