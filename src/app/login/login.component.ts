import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  user: any

  onSubmit() {
    this.router.navigate(['/dashboard']);
    console.log('submit');
    toast.success('Sesión iniciada correctamente');

    // this.user = {
    //   id: 1,
    //   username: 'rgimenez',
    //   team: 'joaju',
    //   rol: 'admin',
    //   company: 'joaju',
    //   email: 'rgimenez@joaju.net',
    // };

    this.user = {
      id: 1,
      username: 'rgimenez',
      team: 'joaju',
      rol: 'client',
      company: 'joaju',
      email: 'rgimenez@joaju.net',
    };

    this.saveUser(this.user);

  }

  saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

}
