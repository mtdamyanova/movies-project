import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';

const maxFileSize = 4000000;
@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-or-edit-movie.component.html',
  styleUrls: ['./add-or-edit-movie.component.css'],
})
export class AddNewMovieComponent implements OnInit {
  addMovieForm: FormGroup;
  title: string;
  editMode = false;
  downloadURL: string;
  imageFile: File = null;
  uploadPercent: Observable<number>;
  percent: number;
  errorMessage: string = '';

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
  }

  onCancel() {
    if (this.editMode) {
      this.router.navigate(['../'], {
        relativeTo: this.route,
      });
    } else {
      this.addMovieForm.reset();
    }
  }

  onFileSelected($event) {
    this.errorMessage = '';
    if ($event.target.files.length > 0 && $event.target.files[0] != null) {
      const file = $event.target.files[0];
      if (this.validateFile(file)) {
        this.imageFile = file;
      } else {
        this.errorMessage = 'Not a valid file!';
      }
    }
  }

  validateFile(file: File): boolean {
    if (file.size > maxFileSize) {
      return false;
    } else if (!file.type.includes('image')) {
      return false;
    }
    return true;
  }

  uploadImage() {
    const filePath =
      '/images/' + Math.floor(Math.random() * 100) + this.imageFile.name;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, this.imageFile);
    uploadTask.percentageChanges().subscribe((data) => (this.percent = data));
    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef.getDownloadURL().subscribe((data) => {
            this.downloadURL = data;
            this.addMovieForm.get('img').setValue(data);
          })
        )
      )
      .subscribe((res) => console.log(res, 'res'));
  }

  private initForm() {
    const movieObj = {
      movieTitle: '',
      movieDirector: '',
      movieYear: '',
      movieImg: '',
      movieDescription: '',
      movieDuration: 0,
    };

    if (this.editMode) {
      this.moviesService.getMovie(this.title).subscribe((res) => {
        const movie = res;

        movieObj.movieTitle = movie.title;
        movieObj.movieDirector = movie.director;
        movieObj.movieYear = movie.year;
        movieObj.movieImg = movie.img;
        movieObj.movieDescription = movie.description;
        movieObj.movieDuration = movie.duration;

        this.setFormData(movieObj);
      });
    }

    this.setFormData(movieObj);
  }

  setFormData(obj) {
    this.addMovieForm = new FormGroup({
      title: new FormControl(obj.movieTitle, [Validators.required]),
      director: new FormControl(obj.movieDirector, [Validators.required]),
      year: new FormControl(obj.movieYear, [Validators.required]),
      img: new FormControl(obj.movieImg, [Validators.required]),
      description: new FormControl(obj.movieDescription, [Validators.required]),
      duration: new FormControl(obj.movieDuration, [Validators.required]),
    });
  }
}
