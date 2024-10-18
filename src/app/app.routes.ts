import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { userGuard } from './guard/user.guard';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { loginGuard } from './guard/login.guard';
import { authGuard } from './guard/auth.guard';


export const routes: Routes = [
  { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuard],
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [loginGuard],
    // canActivate: [userGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
        // canActivate: [userGuard],
    
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }

];
