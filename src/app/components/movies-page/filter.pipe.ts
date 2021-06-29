import { Pipe, PipeTransform } from '@angular/core';
import { debounce } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: Movie[], inputValue?: string): any {
    if (inputValue === '') return movies;
    return movies.filter(movie => movie.title.toLowerCase().includes(inputValue.toLocaleLowerCase()));
  }

}
