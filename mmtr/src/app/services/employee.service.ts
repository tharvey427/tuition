import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { EndpointsService } from '../constants/endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private endpoints: EndpointsService) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.endpoints.getAllEmployees);
  }

  getEmployee(): Observable<Employee> {
    return this.http.get<Employee>(this.endpoints.getEmployee);
  }
}
