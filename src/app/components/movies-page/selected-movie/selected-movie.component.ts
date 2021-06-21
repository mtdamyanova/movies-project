import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  movie: Movie;
  title: string;
  hoverDescription: boolean = false;
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');
    this.moviesService.getMovie(this.title);
  }
  
  onMouseOver() {
    this.hoverDescription = true;
  }

  onMouseLeave() {
    this.hoverDescription = false;
  }
}
