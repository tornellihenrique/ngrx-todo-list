import { Action } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export enum ActionTypes {
  ToggleTodoCompleted = '[Todos List Container] ToggleTodoCompleted'
}

export class ToggleTodoCompleted implements Action {
  readonly type = ActionTypes.ToggleTodoCompleted;
  constructor(public payload: { todo: Todo }) {}
}
