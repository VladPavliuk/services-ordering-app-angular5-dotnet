import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/partials/header/header.component';

import { TodoService } from './services/todo/todo.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';

import { IndexComponent as OrganizationsIndexComponent } from './components/organizations/index/index.component'
import { AddComponent as OrganizationAddComponent } from './components/organizations/add/add.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent,
    TodoItemComponent,
    TodoAddComponent,
    OrganizationAddComponent,
    OrganizationsIndexComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
