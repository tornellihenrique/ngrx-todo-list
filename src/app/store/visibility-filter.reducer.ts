
import * as TodoLinkFilter from '../todos-page/containers/todo-link-filter/todo-link-filter.actions';

export enum VisibilityFilter {
  ShowAll = 'ShowAll',
  ShowPendents = 'ShowPendents',
  ShowDone = 'ShowDone'
}
const initialState = VisibilityFilter.ShowAll;
export const visibilityFilter = (state = initialState, action) => {
  if (action.type === TodoLinkFilter.ActionTypes.SetVisibilityFilter) {
    return action.payload.visibilityFilter;
  }
  return state;
};

export const getVisibilityFilter = state => state.visibilityFilter;
