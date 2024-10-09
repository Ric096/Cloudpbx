import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { toast } from 'ngx-sonner';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-teams',
  standalone: true,
  imports: [],
  templateUrl: './create-teams.component.html',
  styleUrl: './create-teams.component.css'
})
export class CreateTeamsComponent implements OnInit {

  constructor( private teamService: TeamService) { }

  data$: Observable<any>;

  ngOnInit(): void {
    // this.getTeams();
  }

  // getTeams() {
  //   this.teamService.getTeams().subscribe(({mensaje}) => {
  //     this.data = mensaje;
  //     console.log(this.data);
      
  //   });
  // }

}
