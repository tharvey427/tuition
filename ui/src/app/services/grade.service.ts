import { Observable } from 'rxjs';
import { EndpointService } from './endpoint.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grade } from '../classes/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {


  constructor(private http: HttpClient, private endpoint: EndpointService) { }

  getAllGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.endpoint.getAllGrades);
  }
}
