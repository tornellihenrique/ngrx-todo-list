import { Action } from '@ngrx/store';
import { VisibilityFilter } from 'src/app/store/visibility-filter.reducer';

export const enum ActionTypes {
  SetVisibilityFilter = '[Todo Link Filter] SetVisibilityFilter'
}

export class SetVisibilityFilter implements Action {
  readonly type = ActionTypes.SetVisibilityFilter;
  constructor(public payload: { visibilityFilter: VisibilityFilter }) {}
}

