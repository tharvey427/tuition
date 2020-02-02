import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EndpointsService } from '../constants/endpoints.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {SessionStorage, SessionStorageService} from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  private employee: Employee;
  // appURL = this.endpoints.login();

  constructor(private http: HttpClient, private endpoints: EndpointsService,
              public session: SessionStorageService) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.endpoints.getAllEmployees);
  }

  getEmployee(): Observable<Employee> {
    return this.http.get<Employee>(this.endpoints.getEmployee);
  }

  login(username: string, password: string): Observable<Employee> {
    if (username && password) {
      const body = `username=${username}&password=${password}`;
      return this.http.post(this.endpoints.login, body,
        {headers: this.headers, withCredentials: true}).pipe(
        map(resp => {
          console.log(resp);
          const loggedUser: Employee = resp as Employee;
          this.session.set('Employee', JSON.stringify(this.employee));
          console.log(this.endpoints.login);
          console.log(this.headers);
          console.log(this.http);
          return this.employee;
        })
      );
    }
  }
}
