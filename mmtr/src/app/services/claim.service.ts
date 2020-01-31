import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointsService } from '../constants/endpoints.service';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient, private endpoints: EndpointsService) {}

  getAllClaims(): Observable<Claim[]> {
    return this.http.get<Claim[]>(this.endpoints.getAllClaims);
  }

  getClaim(): Observable<Claim> {
    return this.http.get<Claim>(this.endpoints.getClaim);
  }
}
