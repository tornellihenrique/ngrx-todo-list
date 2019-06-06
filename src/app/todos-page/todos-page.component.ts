import { Component, OnInit } from '@angular/core';
import { VisibilityFilter } from '../store/visibility-filter.reducer';
import { Store } from '@ngrx/store';
import { AppState } from '../store/root.reducer';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {
  visibilityFilters = VisibilityFilter;

  constructor() { }

  ngOnInit() {}
}
