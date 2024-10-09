import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  inputName: any;

  constructor(private router: Router) { }

  userData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  user: any



  onSubmit() {

    // if (!this.userData.valid) {

      this.router.navigate(['/dashboard']);
      console.log('submit');
      toast.success('Sesión iniciada correctamente');

      this.user = {
        id: 1,
        username: 'rgimenez',
        team: 'joaju',
        rol: 'admin',
        company: 'joaju',
        email: 'rgimenez@joaju.net',
      };


    // } 
    this.saveUser(this.user);

  }

  saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

}
