import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';

const URL = environment.backednUrl;

const headers = {
  'Content-Type': 'application/json',
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  createUser(newUser: any): Observable<any> {
    return this.http.post(`${URL}/api/register`, newUser, {headers: headers}).
      pipe(
        catchError(this.handleError)
      );
  }

  handleError(error: any) {
    let errorMessage = '';

    errorMessage = error.error.message;

    console.log(errorMessage);
    
    return throwError(() => errorMessage);
  }

  getinfo() {
    return this.http.get(`${URL}/getInfo`).
      pipe(
        catchError(this.handleError)
      );
  }

}
