import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoName: string;

  constructor(
    private todoService: TodoService,
    private location: Location
  ) { }

  setName(event: any) {
    this.todoName = event.target.value;
  }

  create() {
    this.todoService.createItem({
      name: this.todoName,
      isComplete: false
    }).subscribe(res => { console.log('Item added'); this.location.back(); })
  }

  ngOnInit() {
  }

}
