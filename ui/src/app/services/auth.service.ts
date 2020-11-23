import { Employee } from './../classes/employee1';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(usernam: string, password: string) {
    // return this.http.post<Employee>('')
  }
}
