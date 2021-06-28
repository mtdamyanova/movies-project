import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movies: any;
  @Output() onSort = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  sortMovies(prop: string, type: string) {
    this.onSort.emit({ prop, type });
  }

  deleteMovie(prop: string) {
    this.onDelete.emit(prop);
  }
}
