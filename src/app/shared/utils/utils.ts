import { Movie } from "../models/movie.model";

export function getMoviesArr() {
    const moviesArr: Movie[] = [];
    for (let key in this.movies) {
      if (this.movies.hasOwnProperty(key)) {
        moviesArr.push(this.movies[key]);
      }
    }
    return moviesArr;
  }