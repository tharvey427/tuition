import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
private readonly baseUrl = 'http://localhost:8080';

// Claim Methods
public readonly getAllClaims: string = this.baseUrl + '/claims';
public readonly getClaim: string = this.baseUrl + '/claims/${id}';
public readonly getAllClaimsByEmployee: string = this.baseUrl + '/claims/employee/${id}';

// Grade Methods
public readonly getAllGrades: string = this.baseUrl + '/grades';

// Event Methods
public readonly getAllEvents: string = this.baseUrl + '/events';

// Emplpyee Methods
public readonly getAllEmployees: string = this.baseUrl + '/employees';
public readonly getEmployeeById: string = this.baseUrl + '/employees/${id}';

  constructor() { }
}
