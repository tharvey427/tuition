import { Employee } from './../classes/employee1';
import { Observable } from 'rxjs';
import { EndpointService } from './endpoint.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private endpoint: EndpointService) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.endpoint.getAllEmployees);
  }

  getEmployeeById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(this.endpoint.getEmployeeById(employeeId));
  }
}
