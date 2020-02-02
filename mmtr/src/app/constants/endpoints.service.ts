import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  private readonly baseUrl = 'http://localhost:8080';

  public readonly getAllEmployees: string = this.baseUrl + '/employees';
  public readonly getEmployee: string = this.baseUrl + '/employees/${id}';
  public readonly getAllClaims: string = this.baseUrl + '/claims';
  public readonly getClaim: string = this.baseUrl + '/claims/${id}';
  public readonly login: string = this.baseUrl + '/login';

  constructor() { }
}
