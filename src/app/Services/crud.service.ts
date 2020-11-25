import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Todo {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;

}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // REST API
  endpoint = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getTodos(): Observable<Todo> {
    return this.httpClient.get<Todo>(this.endpoint + '/todo-list')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getSingleTodo(id: string): Observable<Todo> {
    return this.httpClient.get<Todo>(this.endpoint + '/todo-list/' + id)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  addTodo(data): Observable<Todo> {
    return this.httpClient.post<Todo>(this.endpoint + '/todo-list', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  updateTodo(id, data): Observable<Todo> {
    return this.httpClient.put<Todo>(this.endpoint + '/todo-list' + id, JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  deleteTodo(id){
    return this.httpClient.delete<Todo>(this.endpoint + '/todo-list/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  processError(err) {
     let message = '';
     if(err.error instanceof ErrorEvent) {
      message = err.error.message;
     } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
     }
     console.log(message);
     return throwError(message);
  }
  
}