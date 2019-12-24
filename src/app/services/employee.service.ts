import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empdata } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private readonly http: HttpClient) { }

  getEmpData(url?: string): Observable<Empdata> {
    return this.http.get<Empdata>('https://jsonplaceholder.typicode.com/posts/1/comments');
  }

}
