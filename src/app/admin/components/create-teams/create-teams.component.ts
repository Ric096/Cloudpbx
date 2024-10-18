import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { toast } from 'ngx-sonner';
import { Observable } from 'rxjs';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-teams',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './create-teams.component.html',
  styleUrl: './create-teams.component.css'
})
export class CreateTeamsComponent implements OnInit {

  constructor( private teamService: TeamService, fb: FormBuilder) { 
    this.teamForm = fb.group({
      service: ['crear_team', Validators.required],
      team: ['', Validators.required]
    })
  }

  teamname: string;

  teamForm!: FormGroup

  ngOnInit(): void {
  }

  createTeams() {

    // console.log(this.teamname);
    

    if(!this.teamForm.value) {
      toast.error('El nombre del equipo es requerido');
      return;
    }

    const formData = new FormData();

    formData.append('service', this.teamForm.get('service').value);
    formData.append('team', this.teamForm.get('team').value);

    console.log(this.teamForm.value);

    this.sendTeam(formData);
    
  }

  sendTeam(data:any) {
  
    const response = this.teamService.createTeams(data).subscribe({
      next: (data: any) => {
        toast.success('Creado correctamente');
        console.log(data);
        
      },
      error: (error:any) => {
        toast.error('Ha ocurrido un error, intentalo de nuevo');
        console.log(error)
      },
      complete: () => {
        response.unsubscribe();
      }
    }
    );

    this.clearForm();

  }

  clearForm() { 
    this.teamname = '';
  }

}
