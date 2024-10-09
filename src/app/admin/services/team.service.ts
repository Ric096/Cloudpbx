import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${environment.token}` 
};

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private readonly http:HttpClient) { }

  getTeams(): Observable<any> {
    return this.http.get(`${environment.apiTestTeams}`, {headers: headers });
  }

}
