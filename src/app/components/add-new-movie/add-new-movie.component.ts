import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.css'],
})
export class AddNewMovieComponent implements OnInit {
  addMovieForm: FormGroup;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.addMovieForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      director: new FormControl(null, [Validators.required]),
      year: new FormControl(null, [Validators.required]),
      img: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.addMovieForm.value)
    this.moviesService.addNewMovie(this.addMovieForm.value);
    this.addMovieForm.reset();
  }

  onCancel() {
    this.addMovieForm.reset();
  }
}
