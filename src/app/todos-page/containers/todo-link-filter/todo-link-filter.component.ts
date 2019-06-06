import { Component, OnInit, Input } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/root.reducer';
import { getVisibilityFilter, VisibilityFilter } from 'src/app/store/visibility-filter.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetVisibilityFilter } from './todo-link-filter.actions';

@Component({
  selector: 'app-todo-link-filter',
  templateUrl: './todo-link-filter.component.html',
  styleUrls: ['./todo-link-filter.component.scss']
})
export class TodoLinkFilterComponent implements OnInit {
  @Input() type: VisibilityFilter;

  isActive$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.isActive$ = this.store.select(getVisibilityFilter).pipe(
      map(visibilityFilter => (visibilityFilter === this.type))
    );
  }

  setFilterVisibility() {
    this.store.dispatch(new SetVisibilityFilter({ visibilityFilter: this.type }));
  }
}
