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

  getDashboardData(inititalDate: any, endDate: any, team: string): Observable<any> {
    return this.http.get(`${environment.apiTestUrl}team=${team}&fecha_ini=${inititalDate}&fecha_fin=${endDate}`, { headers: headers });
  }
}
