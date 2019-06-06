import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root.reducer';
import { AddNewTodo } from './add-todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  description: string;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {}

  onAddTodo() {
    if (this.description.length > 0) {
      this.store.dispatch(new AddNewTodo({ description: this.description }));
      this.description = '';
    }
  }
}
