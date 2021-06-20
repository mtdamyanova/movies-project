import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.css'],
})
export class AddNewMovieComponent implements OnInit {
  addMovieForm: FormGroup;
  id: number;
  editMode = false;

  constructor(private moviesService: MoviesService,  private route: ActivatedRoute,) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;

      this.initForm();
    });

  }

  onSubmit() {
    this.moviesService.addNewMovie(this.addMovieForm.value);
    this.addMovieForm.reset();
  }

  onCancel() {
    this.addMovieForm.reset();
  }

  private initForm() {
    let title = '';
    let director = '';
    let year = '';
    let img = '';
    let description = '';

    if (this.editMode) {
      const movie = this.moviesService.getMovie(this.id);
      title = movie.title;
      director = movie.director;
      year = movie.year;
      img = movie.img;
      description = movie.description;
    }

    this.addMovieForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      director: new FormControl(null, [Validators.required]),
      year: new FormControl(null, [Validators.required]),
      img: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }
}
