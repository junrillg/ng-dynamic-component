import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  fetchConfig(type: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/json/config/${type}`);
  }

  fetchData(type: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/json/data/${type}`);
  }

}
