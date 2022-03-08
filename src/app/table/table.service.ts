import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TableService {

  private REST_API = "https://jsonplaceholder.typicode.com/users";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  fetchUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.REST_API);
  }

}