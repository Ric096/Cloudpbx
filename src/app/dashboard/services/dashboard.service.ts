import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${environment.token}` 
};

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private readonly http: HttpClient) { }

  getDashboardData():Observable<any> {

    return this.http.get(`${environment.apiTestUrl}`, { headers: headers });
  }
}
