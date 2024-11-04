import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { toast } from 'ngx-sonner';



export const userGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);

  const user = JSON.parse(localStorage.getItem('user'));
  
  console.log(user.role);
  
  if(user.role !== 'admin'){
    toast.error('No tienes permisos para ingresar')
    router.navigate(['/dashboard']);
    return false;

  }

  return true;
};
