import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from "../../../components/dropdown/dropdown.component";
import { TeamService } from '../../services/team.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { toast } from 'ngx-sonner';
import { PaginatorComponent } from "../../../dashboard/components/paginator/paginator.component";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [DropdownComponent, ReactiveFormsModule, FormsModule, PaginatorComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {

  constructor(private teamService: TeamService, private adminService: AdminService) { }

  teamData: any;

  email: string;
  name: string;
  lastname: string;
  username: string;
  password: string;
  confirmPassword: string;
  team: any
  cleanField: boolean = false;
  role: any;
  showCreateUser: boolean = false;
  tableHeaders: string[] = []

  currentPage: number = 1;  // Página actual
  totalPages: number = 0;
  arrayOfPages: number[] = [];
  pageSize: number = 5;
  paginatedData: any

  // USER roles
  roles: any[] = [{id: 1, name:'admin'}, { id:2, name:'customer'}];


  ngOnInit(): void { 
    this.getTeamData()
    this.tableHeaders = ['ID', 'Teams', 'Acción']
  }

  showCreateModal(){
    this.showCreateUser = !this.showCreateUser
  }

  paginateData() {

    console.log('ya hay datos');

    // this.loading = false
    const startIndex = (this.currentPage - 1) * this.pageSize;

    const endIndex = startIndex + this.pageSize;

    console.log(startIndex, endIndex);

    this.paginatedData = this.teamData?.slice(startIndex, endIndex);
    console.log(this.paginatedData);
    // } 
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.paginateData();
  }

  getTeamData() {

    // Obtenemos los datos de los teams
    this.teamService.getTeams().subscribe((data) => (
      this.teamData = data.mensaje,
      console.log(data)
      // console.log(this.teamData);
      
    ));
  }

  createUser() {

    // Validamos que todos los campos esten completos
    if(this.email === undefined || this.username === undefined || this.password === undefined || this.confirmPassword === undefined){
      toast.error('Todos los campos son obligatorios');
      return;
    }

    // Validamos que las contraseñas sean iguales
    if(this.password !== this.confirmPassword){
      toast.error('Las contraseñas no coinciden');
      return;
    }

    // Creamos el nuevo usuario y lo pasamos a string para que pueda ser enviado
    let newUser = JSON.stringify({
      email: this.email,
      name: this.name,
      lastname: this.lastname,
      username: this.username,
      password: this.password,
      // teams: this.team.n_team,
      role: this.role.name

    })

    console.log(newUser)

    // Hacemos la petición para crear el nuevo usuario
    this.fetchingNewUser(newUser);

    // Limpiamos el formulario
    this.clearForm();

  }
  
  // Función para realizar la petición
  fetchingNewUser(newUser: any) {

    const createUser = this.adminService.createUser(newUser).subscribe({
      next: (data: any) => {
        console.log(data);
        
        toast.success('Usuario creado correctamente');
        
      },
      error: (error: any) => {
        toast.error(error)
        console.log(error)
      },
      complete: () => {
        createUser.unsubscribe();
      }
    });

  }

  // Función para limpiar el formulario
  clearForm() {
    this.email = undefined;
    this.username = undefined;
    this.password = undefined;
    this.confirmPassword = undefined;
    this.team = undefined;
    this.cleanField = true;
  }

}
