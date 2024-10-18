import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../components/footer/footer.component";
import { LayoutComponent } from "../components/layout/layout.component";
import { Router } from '@angular/router';
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { CreateTeamsComponent } from "./components/create-teams/create-teams.component";
import { TeamService } from './services/team.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FooterComponent, LayoutComponent, CreateUserComponent, CreateTeamsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  showTeam: boolean = false
  showUser: boolean = false

  ngOnInit(): void {
    this.getUsers()
  }

  // users = [
  //   {
  //     id: 1,
  //     username: 'rgimenez',
  //     team: 'joaju',
  //     rol: 'admin',
  //     company: 'joaju',
  //     email: 'rgimenez@joaju.net',
  //   },
  //   {
  //     id: 2,
  //     username: 'rgimenez',
  //     team: 'joaju',
  //     rol: 'admin',
  //     company: 'joaju',
  //     email: 'rgimenez@joaju.net',
  //   },
  //   {
  //     id: 3,
  //     username: 'rgimenez',
  //     team: 'joaju',
  //     rol: 'admin',
  //     company: 'joaju',
  //     email: 'rgimenez@joaju.net',
  //   },
  //   {
  //     id: 4,
  //     username: 'pepito',
  //     team: 'otro',
  //     rol: 'client',
  //     company: 'otro',
  //     email: 'pepito@otro.com',
  //   },
  //   // {
  //   //   id:5,
  //   //   username: 'pepe',
  //   //   team: 'otro2',
  //   //   rol: 'client',
  //   //   company: 'otro2',
  //   //   email: 'otro2@algo.com'
  //   // },
  //   // {
  //   //   id:5,
  //   //   username: 'pepe',
  //   //   team: 'otro2',
  //   //   rol: 'client',
  //   //   company: 'otro2',
  //   //   email: 'otro2@algo.com'
  //   // },
  //   // {
  //   //   id:5,
  //   //   username: 'pepe',
  //   //   team: 'otro2',
  //   //   rol: 'client',
  //   //   company: 'otro2',
  //   //   email: 'otro2@algo.com'
  //   // },
  //   // {
  //   //   id:5,
  //   //   username: 'pepe',
  //   //   team: 'otro2',
  //   //   rol: 'client',
  //   //   company: 'otro2',
  //   //   email: 'otro2@algo.com'
  //   // },
  //   // {
  //   //   id:5,
  //   //   username: 'pepe',
  //   //   team: 'otro2',
  //   //   rol: 'client',
  //   //   company: 'otro2',
  //   //   email: 'otro2@algo.com'
  //   // },
    
    
  // ]

  constructor(private router: Router, private teamService: TeamService) {}

  goToDashboard() {
    this.router.navigate(['/dashboard'])
  }

  showTeamModal() {
    this.showTeam = !this.showTeam
    this.showUser = false;
  }

  showUserModal() {
    this.showUser = !this.showUser
    this.showTeam = false;
  }
users2: any;
  getUsers() {
    this.teamService.getUsers().subscribe((data: any) => {
      console.log(data);
      this.users2 = data;
    });
  }

}