import { Todo } from '../todos-page/models/todo.model';
import uuidv1 from 'uuid/v1';
import * as TodosListContainer from '../todos-page/containers/todos-list-container/todos-list-container.actions';
import * as AddTodo from '../todos-page/containers/add-todo/add-todo.actions';

const initialState: Todo[] = [
  {
    id: uuidv1(),
    description: 'Tarefa exemplo',
    completed: false
  }
];
export const todos = (state = initialState, action) => {
  if (action.type === TodosListContainer.ActionTypes.ToggleTodoCompleted) {
    const payload = action.payload;
    return state.map(todo => {
      if (todo.id === payload.todo.id) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });
  } else if (action.type === AddTodo.ActionTypes.AddNewTodo) {
    const description = action.payload.description;
    return [{ description, completed: false, id: uuidv1() }, ...state];
  } else if (action.type === TodosListContainer.ActionTypes.RemoveTodo) {
    const payload = action.payload;
    return state.filter(todo => {
      return (todo !== action.payload.todo);
    });
  }
  return state;
};

export const getTodos = state => state.todos;
