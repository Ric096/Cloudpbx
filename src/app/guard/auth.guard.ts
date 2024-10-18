import { CanActivateFn, Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const user = JSON.parse(localStorage.getItem('user'));

  const router = inject(Router);

  if(user){

    toast.info('Usuario ya autenticado');
    router.navigate(['/dashboard']);
    return false;
  } else {
    return true;
  }

};
