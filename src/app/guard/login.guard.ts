import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { toast } from 'ngx-sonner';

export const loginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const user = JSON.parse(localStorage.getItem('user'))


  if(!user){
    console.log('que paso ');
    
    toast.info('Para acceder debes iniciar sesión');
    router.navigate(['/login'])
    return false
  } else {
    console.log('que paso 2');

    // toast.info('Autenticado'); 
    return true 
  }

};
