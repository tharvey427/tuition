import { EndpointService } from './endpoint.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../classes/claim';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  dataSource = new MatTableDataSource();

  constructor(private http: HttpClient, private endpoint: EndpointService) { }

  getAllClaims(): Observable<Claim[]> {
    return this.http.get<Claim[]>(this.endpoint.getAllClaims);
  }

  getClaim(claimId: number): Observable<Claim> {
    return this.http.get<Claim>(this.endpoint.getClaim.replace(
      '${id}', claimId.toString()
    ));
  }
}
