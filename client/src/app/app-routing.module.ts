import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './components/todo-list/todo-list.component'
import { TodoItemComponent } from './components/todo-item/todo-item.component'
import { TodoAddComponent } from './components/todo-add/todo-add.component'
import { IndexComponent as OrganizationsIndexComponent } from './components/organizations/index/index.component'
import { AddComponent as OrganizationAddComponent } from './components/organizations/add/add.component'

const routes: Routes = [
  // { path: 'todo-list', component: TodoListComponent },
  // { path: 'todo-add', component: TodoAddComponent },
  // { path: 'todo-item/:id', component: TodoItemComponent },
  { path: '', component: OrganizationsIndexComponent },
  { path: 'organization-add', component: OrganizationAddComponent },
  { path: 'organization/:id', component: OrganizationAddComponent },
  
  // { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
