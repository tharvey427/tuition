import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  private readonly baseUrl = 'http://localhost:8080';

  public readonly getAllEmployees: string = this.baseUrl + '/employees/all';

  constructor() { }
}
