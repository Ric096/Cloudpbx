import { Component } from '@angular/core';
import { FooterComponent } from "../components/footer/footer.component";
import { LayoutComponent } from "../components/layout/layout.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FooterComponent, LayoutComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  showTeam: boolean = false
  showUser: boolean = false

  users = [
    {
      id: 1,
      username: 'rgimenez',
      team: 'joaju',
      rol: 'admin',
      company: 'joaju',
      email: 'rgimenez@joaju.net',
    },
    {
      id: 2,
      username: 'rgimenez',
      team: 'joaju',
      rol: 'admin',
      company: 'joaju',
      email: 'rgimenez@joaju.net',
    },
    {
      id: 3,
      username: 'rgimenez',
      team: 'joaju',
      rol: 'admin',
      company: 'joaju',
      email: 'rgimenez@joaju.net',
    },
    {
      id: 4,
      username: 'pepito',
      team: 'otro',
      rol: 'client',
      company: 'otro',
      email: 'pepito@otro.com',
    },
    {
      id:5,
      username: 'pepe',
      team: 'otro2',
      rol: 'client',
      company: 'otro2',
      email: 'otro2@algo.com'
    },
    {
      id:5,
      username: 'pepe',
      team: 'otro2',
      rol: 'client',
      company: 'otro2',
      email: 'otro2@algo.com'
    },
    {
      id:5,
      username: 'pepe',
      team: 'otro2',
      rol: 'client',
      company: 'otro2',
      email: 'otro2@algo.com'
    },
    {
      id:5,
      username: 'pepe',
      team: 'otro2',
      rol: 'client',
      company: 'otro2',
      email: 'otro2@algo.com'
    },
    {
      id:5,
      username: 'pepe',
      team: 'otro2',
      rol: 'client',
      company: 'otro2',
      email: 'otro2@algo.com'
    },
    
    
  ]

  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard'])
  }

  showTeamModal() {
    this.showTeam = !this.showTeam
  }

  showUserModal() {
    this.showUser = !this.showUser
  }

}