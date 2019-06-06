import { Action } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export enum ActionTypes {
  ToggleTodoCompleted = '[Todos List Container] ToggleTodoCompleted',
  RemoveTodo = '[Todos List Container] RemoveTodo'
}

export class ToggleTodoCompleted implements Action {
  readonly type = ActionTypes.ToggleTodoCompleted;
  constructor(public payload: { todo: Todo }) {}
}

export class RemoveTodo implements Action {
  readonly type = ActionTypes.RemoveTodo;
  constructor(public payload: { todo: Todo }) {}
}
