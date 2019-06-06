import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosPageRoutingModule } from './todos-page-routing.module';
import { TodosPageComponent } from './todos-page.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { FilterLinkComponent } from './filter-link/filter-link.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoLinkFilterComponent } from './containers/todo-link-filter/todo-link-filter.component';
import { TodosListContainerComponent } from './containers/todos-list-container/todos-list-container.component';
import { AddTodoComponent } from './containers/add-todo/add-todo.component';

@NgModule({
  declarations: [
    TodosPageComponent,
    ListTodosComponent,
    FilterLinkComponent,
    TodoItemComponent,
    TodoLinkFilterComponent,
    TodosListContainerComponent,
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    TodosPageRoutingModule,
    FormsModule
  ]
})
export class TodosPageModule {}
