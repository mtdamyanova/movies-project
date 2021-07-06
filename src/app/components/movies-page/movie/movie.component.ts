import { KeyValue } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [FilterPipe]
})
export class MovieComponent {
  @Input() movies: any;
  @Input() inputValue: string;
  @Output() onSort = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  sortMovies(prop: string, type: string) {
    this.onSort.emit({ prop, type });
  }

  deleteMovie(prop: string) {
    this.onDelete.emit(prop);
  }
}
