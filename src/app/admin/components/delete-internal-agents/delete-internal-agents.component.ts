import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamService } from '../../services/team.service';
import { toast } from 'ngx-sonner';
import { DropdownComponent } from "../../../components/dropdown/dropdown.component";


@Component({
  selector: 'app-delete-internal-agents',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, DropdownComponent],
  templateUrl: './delete-internal-agents.component.html',
  styleUrl: './delete-internal-agents.component.css'
})
export class DeleteInternalAgentsComponent implements OnInit {

  teams: any;
  cleanField: boolean = false;
  selectTeam: any;

  internName: string;
  service: string = 'del_exten_team'
  team: string;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeams()
  }

  deleteIntern() {

    // Validamos que todos los campos esten completos
    if (!this.internName || !this.selectTeam) {
      toast.error('Todos los datos son requeridos');
      return
    }

    // Creamos el nuevo interno 
    const intern = new FormData()

    intern.append('service', this.service)
    intern.append('exten', this.internName)
    intern.append('team', this.selectTeam.id_team)

    console.log(intern)

    this.updateIntern(intern)

    // console.log('Interno eliminado')
  }

  getTeams() {
    const petition = this.teamService.getTeams().subscribe({
      next: (data) => {
        this.teams = data.mensaje
        console.log(this.teams)
      },
      error: (error) => {
        toast.error('Ha ocurrido un error, intentalo de nuevo');
        console.log(error)
      },
      complete: () => {
        petition.unsubscribe();
      }
    })
  }

  updateIntern(intern: any) {
    const response = this.teamService.deleteInternalAgents(intern).subscribe({
      next: (data) => {
        console.log(data)
        if(data.err_code === "400") {
          toast.error(data.mensaje)
          return
        }
        toast.success('Interno eliminado exitosamente')
      },
      error: (error) => {
        toast.error('Ha ocurrido un error, intentalo de nuevo');
        console.log(error)
      },
      complete: () => {
        response.unsubscribe();
      }
    })
  }


}
