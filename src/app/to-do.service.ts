import { ToDo } from './ToDo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private userURL = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.userURL);
  }
}
