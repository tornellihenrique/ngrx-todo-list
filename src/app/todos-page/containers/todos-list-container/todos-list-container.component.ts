import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/store/root.reducer';
import { Todo } from '../../models/todo.model';
import { getVisibleTodos } from './todos-list-container.selectors';
import { ToggleTodoCompleted } from './todos-list-container.actions';

@Component({
  selector: 'app-todos-list-container',
  templateUrl: './todos-list-container.component.html',
  styleUrls: ['./todos-list-container.component.scss']
})
export class TodosListContainerComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.todos$ = this.store.select(getVisibleTodos);
  }

  onToggleTodo(todo: Todo) {
    this.store.dispatch(new ToggleTodoCompleted({ todo }));
  }
}
