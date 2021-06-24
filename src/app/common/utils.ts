import { Movie } from "../shared/models/movie.model";

export function getMoviesArr(movies) {
    const moviesArr: Movie[] = [];
    for (let key in movies) {
      if (movies.hasOwnProperty(key)) {
        moviesArr.push(movies[key]);
      }
    }
    return moviesArr;
  }