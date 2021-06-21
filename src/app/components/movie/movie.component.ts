import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movies: any;
  @Output() onAscendingSort = new EventEmitter();
  @Output() onDescendingSort = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ascendingSort(prop: string) {
    this.onAscendingSort.emit(prop);
  }
  descendingSort(prop: string) {
    this.onDescendingSort.emit(prop);
  }
  deleteMovie(prop: string) {
    this.onDelete.emit(prop);
  }
}
