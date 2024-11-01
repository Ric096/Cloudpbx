import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  inputName: any;

  userData!: FormGroup

  user: any

  tokens: any

  constructor(private router: Router, private loginService: LoginService, private fb: FormBuilder) {
    this.userData = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }


  
  // Funcion para enviar datos al servidor
  onSubmit() {

    // if (!this.userData.valid) {
    console.log(this.userData.value);

    let user = {
      "username": this.userData.value.username,
      "password": this.userData.value.password
    }

    this.loginUser(user);

  }

  // Peticion para hacer login del usuario
  loginUser(user: any) {

    console.log(user);

    const response = this.loginService.login(user).subscribe({

      next: (data: any) => {

        console.log(data)
          toast.success('Sesión iniciada correctamente');
          this.router.navigate(['/dashboard']);

        this.createUser(data);

      },

      error: (error: any) => {
        toast.error(error)
        console.log(error)
      },

      complete: () => {
        response.unsubscribe();
      }

    // localStorage.setItem('user', JSON.stringify(user));

    })

  }

    createUser(user: any) {

      this.user = {
        id: user.id,
        username: user.username,
        fullName: `${user.name} ${user.lastname}`, 
        email: user.email,
        role: 'admin',
      }
      // Guardamos en localStorage el usuario
      localStorage.setItem('user', JSON.stringify(this.user))

      // Guardamos en localStorage el token
      localStorage.setItem('token', JSON.stringify(
        {
          access: user.token.accessToken,
          // refresh: user.token.refresh
        }
      ))
      



    }



}