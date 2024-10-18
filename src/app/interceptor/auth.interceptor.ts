import { HttpInterceptorFn } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { toast } from 'ngx-sonner';
// import { JwtHelperService } from '@auth0/angular-jwt'

const router = Inject(Router);
// const jwt = Inject(JwtHelperService)

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = JSON.parse(localStorage.getItem('token')); 

  console.log(token);
  
  if(!token){
    toast.info('Para acceder debes iniciar sesión');
    router.navigate(['/login'])
    return throwError(() => new Error('No token'))
  }

  let reqWithHeaders = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token.access}`)
  }) 
  
  return next(reqWithHeaders)

  
};
