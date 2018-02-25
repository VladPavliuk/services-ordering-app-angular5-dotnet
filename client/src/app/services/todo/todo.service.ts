import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TodoService {

  serverLink: string = 'http://localhost:5000/api/todo';

  constructor(private http: HttpClient) { }

  createItem(todoItem: any): Observable<any> {
    return this.http.post(this.serverLink, todoItem, httpOptions);
  }

  getList(): Observable<object[]> {
    return this.http.get<object[]>(this.serverLink);
  }

  getItem(id: number): Observable<object> {
    return this.http.get<object>(this.serverLink + '/' + id);
  }

  updateItem(todoItem: any): Observable<any> {
    return this.http.put(this.serverLink + '/' + todoItem.id, todoItem, httpOptions);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(this.serverLink + '/' + id);
  }
}
