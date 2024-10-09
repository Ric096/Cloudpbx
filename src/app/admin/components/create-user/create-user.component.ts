import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from "../../../components/dropdown/dropdown.component";
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  teamData: any;

  ngOnInit(): void { 
    this.getTeamData()
  }

  getTeamData() {
    this.teamService.getTeams().subscribe((data) => (
      this.teamData = data.mensaje,
      console.log(data)
      // console.log(this.teamData);
      
    ));
  }

}
