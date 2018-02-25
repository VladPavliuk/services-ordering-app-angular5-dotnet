import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo/todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todoItem: any;

  constructor(
    private route: ActivatedRoute, 
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTodoItem();
  }

  getTodoItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getItem(id)
      .subscribe(todoItem => this.todoItem = todoItem);
  }

  makeDone(): void {
    this.todoItem.isComplete = true;
    this.todoService.updateItem(this.todoItem)
      .subscribe(res => { console.log(res)});
  }

  makeActive(): void {
    this.todoItem.isComplete = false;
    this.todoService.updateItem(this.todoItem)
      .subscribe(res => { console.log(res)});
  }

  delete(): void {
    this.todoService.deleteItem(this.todoItem.id)
      .subscribe(res => { console.log(res); this.location.back(); });
  }
}
