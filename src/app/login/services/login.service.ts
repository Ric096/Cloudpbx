import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const URL = environment.backednUrl;

// const token = JSON.parse(localStorage.getItem('token'))?.access;

const headers = {
  'Content-Type': 'application/json',
  // 'Authorization': `Bearer ${token}`
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post(`${URL}/api/login`, user, {headers: headers}).
      pipe( catchError(this.handleError )
    );

  }

  handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = '';

    // console.log(error.error);

    // if (error.error instanceof ErrorEvent) {
      errorMessage = errorResponse.error.message;
    // }

    // console.log(errorMessage, errorResponse.error.message);

    return throwError( () => errorMessage);
  }


}
