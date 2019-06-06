import { todos } from './todos.reducer';
import { visibilityFilter, VisibilityFilter } from './visibility-filter.reducer';
import { Todo } from '../todos-page/models/todo.model';

export const rootReducer = {
  todos,
  visibilityFilter
};

export interface AppState {
  todos: Todo[];
  visibilityFilter: VisibilityFilter;
}
