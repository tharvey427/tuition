import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
private readonly baseUrl = 'http://localhost:8080';

// Claim Methods
public readonly getAllClaims: string = this.baseUrl + '/claims';
public readonly getClaim: string = this.baseUrl + '/claims/${id}';

// Grade Methods
public readonly getAllGrades: string = this.baseUrl + '/grades';

// Emplpyee Methods
public readonly getAllEmployees: string = this.baseUrl + '/employees';
public readonly getEmployeeById: string = this.baseUrl + '/employees/${id}';

  constructor() { }
}
