import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  private readonly baseUrl = 'http://localhost:8080';

  public readonly getAllEmployees: string = this.baseUrl + '/employees';
  // public readonly getEmployee: string = this.baseUrl + '/employees/${:id}';
  // public readonly getEmployee: string = `${this.baseUrl + 'employees'}/${id}`;
  public readonly getAllClaims: string = this.baseUrl + '/claims';
  public readonly getClaim: string = this.baseUrl + '/claims/${id}';
  public readonly getClaimByEmployee: string = this.baseUrl + '/claims/employee/${id}';
  public readonly login: string = this.baseUrl + '/login';
  // let new = decodeURIComponent(getClaimByEmployee);

  constructor() { }
}
