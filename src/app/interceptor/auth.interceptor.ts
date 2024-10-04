import { HttpInterceptorFn } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const router = Inject(Router);

export const authInterceptor: HttpInterceptorFn = (req, next) => {


  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        router.navigate(['/login']);
      }
      return throwError(() => new Error(err.message));
    })  
  );
};
