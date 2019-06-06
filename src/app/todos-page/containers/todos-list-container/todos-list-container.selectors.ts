import { createSelector } from '@ngrx/store';
import { getVisibilityFilter, VisibilityFilter } from 'src/app/store/visibility-filter.reducer';
import { getTodos } from 'src/app/store/todos.reducer';
import { Todo } from '../../models/todo.model';

export const getVisibleTodos = createSelector(
  getVisibilityFilter,
  getTodos,
  (visibilityFilter, todos: Todo[]) => {
    switch (visibilityFilter) {
      case VisibilityFilter.ShowAll:
        return todos;
      case VisibilityFilter.ShowPendents:
        return todos.filter(todo => !todo.completed);
      case VisibilityFilter.ShowDone:
        return todos.filter(todo => todo.completed);
      default:
        throw Error('visibility filter não compativel');
    }
  }
);
