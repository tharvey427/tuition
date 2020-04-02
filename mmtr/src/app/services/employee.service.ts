import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EndpointsService } from '../constants/endpoints.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {SessionStorage, SessionStorageService} from 'angular-web-storage';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  private employee: Employee;
  private readonly baseUrl = 'http://localhost:8080';
  // appURL = this.endpoints.login();

  constructor(private http: HttpClient, private endpoints: EndpointsService,
              public session: SessionStorageService, private cookie: CookieService) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.endpoints.getAllEmployees);
  }

  // getEmployee(employeeId: number): Observable<Employee> {
  //   return this.http.get<Employee>(this.endpoints.getEmployee);
  // }

  getEmployee(employeeId): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl + 'employees'}/${employeeId}`);
  }

  login(username: string, password: string): Observable<Employee> {
    if (username && password) {
      const body = `username=${username}&password=${password}`;
      return this.http.post(this.endpoints.login, body,
        {headers: this.headers, withCredentials: true}).pipe(
        map(resp => {
          const loggedUser: Employee = resp as Employee;
          sessionStorage.setItem('employee', loggedUser.first);
          // this.session.set('Employee', JSON.stringify(this.employee));
          return loggedUser;
        })
      );
    }
  }

  logout() {
    // this.cookie.delete(username)
  }

}
