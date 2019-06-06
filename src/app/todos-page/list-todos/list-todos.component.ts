import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() toggleTodo = new EventEmitter<Todo>();
  @Output() removeTodo = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit() {}

  onToggleTodo(todo: Todo) {
    this.toggleTodo.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.removeTodo.emit(todo);
  }
}
