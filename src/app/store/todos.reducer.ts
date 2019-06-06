import { Todo } from '../todos-page/models/todo.model';
import uuidv1 from 'uuid/v1';
import * as TodosListContainer from '../todos-page/containers/todos-list-container/todos-list-container.actions';
import * as AddTodo from '../todos-page/containers/add-todo/add-todo.actions';

const initialState: Todo[] = [
  {
    id: uuidv1(),
    description: 'eu sei que essa tarefa é inútil',
    completed: false
  },
  {
    id: uuidv1(),
    description: 'meu teste com pisiti',
    completed: false
  },
  {
    id: uuidv1(),
    description: 'bla bla bla bla',
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
  }
  return state;
};

export const getTodos = state => state.todos;
