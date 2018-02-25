import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/partials/header/header.component';

import { OrganizationsService } from './services/organizations/organizations.service';
import { ServicesService } from './services/services/services.service';

import { TodoService } from './services/todo/todo.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';

import { IndexComponent as OrganizationsIndexComponent } from './components/organizations/index/index.component'
import { AddComponent as OrganizationAddComponent } from './components/organizations/add/add.component'
import { SingleComponent as OrganizationSingleComponent } from './components/organizations/single/single.component'

import { IndexComponent as ServicesIndexComponent } from './components/services/index/index.component'
import { AddComponent as ServiceAddComponent } from './components/services/add/add.component'
import { SingleComponent as ServiceSingleComponent } from './components/services/single/single.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent,
    TodoItemComponent,
    TodoAddComponent,
    OrganizationAddComponent,
    OrganizationsIndexComponent,
    OrganizationSingleComponent,
    ServicesIndexComponent,
    ServiceAddComponent,
    ServiceSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TodoService,
    OrganizationsService,
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
