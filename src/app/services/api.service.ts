import { Injectable } from '@angular/core';
import {  HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  getToDo(){
    return this.httpClient.get('http://localhost:3000/api/dressrobe');
  }
  postToDo(todo){
    return this.httpClient.post('http://localhost:3000/api/dressrobe', todo);
  }
}