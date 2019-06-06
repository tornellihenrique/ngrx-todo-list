import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddNewTodo = '[Add Todo] AddNewTodo'
}

export class AddNewTodo implements Action {
  readonly type = ActionTypes.AddNewTodo;
  constructor(public payload: { description: string } ) {}
}
