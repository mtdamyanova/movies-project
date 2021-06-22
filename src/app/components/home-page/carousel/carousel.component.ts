import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({  
  selector: 'app-carousel',  
  templateUrl: './carousel.component.html',  
  styleUrls: ['./carousel.component.css']  
})  

export class CarouselComponent implements OnInit {  
  movies: any;

  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();

    const moviesArr: Movie[] = [];
    for (let key in this.movies) {
      if (this.movies.hasOwnProperty(key)) {
        moviesArr.push(this.movies[key]);
      }
    }
    this.movies = moviesArr;
  }
}
  



// import { Component, OnInit, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-carousel',
//   templateUrl: './carousel.component.html',
//   styleUrls: ['./carousel.component.css']
// })
// export class CarouselComponent implements OnInit {

//   public images : string[]=[
//     'https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1517845732/1517845731.jpg',
//     'data:image/jpeg;base64,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',
//     'https://observer.com/wp-content/uploads/sites/2/2021/05/summer-movies-2021-new-e1620919489437.jpg?quality=80'
//   ]

//   constructor() { }

//   ngOnInit() {
//     // const carousel = document.querySelector('.carousel');
//   }
// }

