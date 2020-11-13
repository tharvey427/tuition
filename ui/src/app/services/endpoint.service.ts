import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
private readonly baseUrl = 'http://localhost:8080';

public readonly getAllClaims: string = this.baseUrl + '/claims';
public readonly getClaim: string = this.baseUrl + '/claims/${id}';

  constructor() { }
}
