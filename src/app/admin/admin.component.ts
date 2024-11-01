import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../components/footer/footer.component";
import { LayoutComponent } from "../components/layout/layout.component";
import { Router } from '@angular/router';
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { CreateTeamsComponent } from "./components/create-teams/create-teams.component";
import { TeamService } from './services/team.service';
import { CreateInternalAgentsComponent } from "./components/create-internal-agents/create-internal-agents.component";
import { DeleteInternalAgentsComponent } from "./components/delete-internal-agents/delete-internal-agents.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FooterComponent, LayoutComponent, CreateUserComponent, CreateTeamsComponent, CreateInternalAgentsComponent, DeleteInternalAgentsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  showTeam: boolean = false
  showUser: boolean = false
  showIntern: boolean = false
  showDeleteIntern: boolean = false
  users: any 

  ngOnInit(): void {
    this.getUsers()
  }

  constructor(private router: Router, private teamService: TeamService) {}

  goToDashboard() {
    this.router.navigate(['/dashboard'])
  }

  showTeamModal() {
    this.showTeam = !this.showTeam
    this.showUser = false;
    this.showDeleteIntern = false
    this.showIntern = false
  }

  showUserModal() {
    this.showUser = !this.showUser
    this.showTeam = false;
    this.showDeleteIntern = false 
    this.showIntern = false
  }

  showInternModal() {
    this.showIntern = !this.showIntern
    this.showUser = false;
    this.showTeam = false;
    this.showDeleteIntern = false
  }

  showDeleteInternModal() {
    this.showDeleteIntern = !this.showDeleteIntern
    this.showUser = false;
    this.showTeam = false;
    this.showIntern = false;
  }


  getUsers() {
    this.teamService.getUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data;
    });
  }

}