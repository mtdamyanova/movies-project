import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.css'],
})
export class AddNewMovieComponent implements OnInit {
  addMovieForm: FormGroup;
  title: string;
  editMode = false;
  downloadURL: Observable<string>;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.title = params['title'];
      this.editMode = params['title'] != null;

      this.initForm();
    });
  }

  onSubmit() {
    this.moviesService.addMovie(this.addMovieForm.value);
    if (this.editMode) {
      this.router.navigate([`../../movies/${this.title}`], {
        relativeTo: this.route,
      });
    } else {
      this.router.navigate([`../movies`], {
        relativeTo: this.route,
      });
    }
    // this.addMovieForm.reset();
  }

  onCancel() {
    if (this.editMode) {
      this.router.navigate([`../../movies/${this.title}`], {
        relativeTo: this.route,
      });
    } else {
      this.addMovieForm.reset();
    }
  }

  private initForm() {
    let movieTitle = '';
    let movieDirector = '';
    let movieYear = '';
    let movieImg = '';
    let movieDescription = '';

    if (this.editMode) {
      this.moviesService.getMovie(this.title).subscribe((res) => {
        const movie = res;

        movieTitle = movie.title;
        movieDirector = movie.director;
        movieYear = movie.year;
        movieImg = movie.img;
        movieDescription = movie.description;
      });
    }

    this.addMovieForm = new FormGroup({
      title: new FormControl(movieTitle, [Validators.required]),
      director: new FormControl(movieDirector, [Validators.required]),
      year: new FormControl(movieYear, [Validators.required]),
      img: new FormControl(movieImg, [Validators.required]),
      description: new FormControl(movieDescription, [Validators.required]),
    });
  }
}
