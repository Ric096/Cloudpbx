import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamService } from '../../services/team.service';
import { toast } from 'ngx-sonner';
import { DropdownComponent } from "../../../components/dropdown/dropdown.component";
@Component({
  selector: 'app-create-internal-agents',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, DropdownComponent],
  templateUrl: './create-internal-agents.component.html',
  styleUrl: './create-internal-agents.component.css'
})
export class CreateInternalAgentsComponent implements OnInit {

  teams:any;
  cleanField: boolean = false;
  selectTeam: any;

  internName: string;
  service: string = 'add_exten_team'
  team: string;

  constructor( private teamService:TeamService ) {
    // this.internForm = fb.group({
    //   service: ['add_exten_team'],
    //   team: ['', Validators.required],
    //   name: ['', Validators.required],
    // })
  }

  // internForm!: FormGroup

  ngOnInit(): void {
    this.getTeams()
  }

  createNewIntern() {

    console.log(this.selectTeam)

    // Validamos que todos los campos esten completos
    if(!this.internName || !this.selectTeam){
      toast.error('Todos los datos son requeridos');
      return
    }

    // Creamos el nuevo interno 
    const intern = new FormData()
    
    intern.append('service', this.service)
    intern.append('exten', this.internName)
    intern.append('team', this.selectTeam.id_team)

    console.log(intern)

    // Hacemos la petición para crear un nuevo interno, pasando como parametro el interno a crear
    this.saveUser(intern)
    
  }

  // Peticion para obtener los teams
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

  // Peticion para crear un interno 
  saveUser(intern: any) {
    const petition = this.teamService.createInternalAgents(intern).subscribe({
      next: (data) => {
        console.log(data)
        toast.success('Interno creado correctamente');
      },
      error: (error) => {
        toast.error(error.message)
        console.log(error)
      },
      complete: () => {
        petition.unsubscribe();
      }
    })
  }

}
