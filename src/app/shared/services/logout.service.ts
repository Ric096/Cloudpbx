import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const URL = environment.backednUrl;

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient, router: Router) { }

  logout() {
    this.http.post(`${URL}/api/logout`, null)
  }

}
