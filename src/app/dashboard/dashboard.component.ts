import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardService } from './services/dashboard.service';
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { DatePipe } from '@angular/common';
import { LayoutComponent } from '../components/layout/layout.component';
import { FooterComponent } from "../components/footer/footer.component";
import { toast } from 'ngx-sonner';
import { DropdownComponent } from "../components/dropdown/dropdown.component";
import { TeamService } from '../admin/services/team.service';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, PaginatorComponent, DatePipe, LayoutComponent, FooterComponent, DropdownComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  data: any;

  user: any = JSON.parse(localStorage.getItem('user'));

  @ViewChild('datepickerStart') datepickerStart: ElementRef;
  @ViewChild('datepickerEnd') datepickerEnd: ElementRef;

  paginatedData: any[] = [];  // Datos que se mostrarán en la página actual
  currentPage: number = 1;  // Página actual
  pageSize: number = 5;  // Tamaño de cada página (número de registros por página)
  totalPages: number = 0;
  teams: any;
  team: string;
  selectTeam: any;

  endDate: any;
  initialDate: any;

  loading: boolean = false;
  arrayOfPages: number[] = [];

  constructor(private dashboardService: DashboardService, private teamService: TeamService) {  }


  tableHeaders: string[] = ['Id', 'Origen de la llamada', 'Destinatario', 'Extensión', 'Fecha', 'Duración', 'Audio'];

  ngOnInit(): void {
    this.getTeams();
  }

  getData() {

    this.loading = true

    if (!this.selectTeam) {
      this.team = this.user.teams
    } else {
      this.team = this.selectTeam.n_team
    }

    this.dashboardService.getDashboardData(this.initialDate, this.endDate, this.team).subscribe((data: any) => {

      console.log(data);

      this.loading = false

      const { mensaje, registro, err_code } = data;

      if (err_code === '400' || registro <= 0) {
        toast.info('No se encontraron registros');
        return;
      }


      this.data = mensaje;

      // Funcion para obtener el numero de paginas
      this.getTotalPages(this.data);

      this.paginateData()

      console.log(this.data);
    });
  }

  getTotalPages(data: any) {
    this.arrayOfPages = []

    this.totalPages = Math.ceil(data.length / this.pageSize);
    console.log(this.totalPages);

    for (let i = 1; i <= this.totalPages; i++) {
      this.arrayOfPages.push(i);
    }

  }

  paginateData() {

    console.log('ya hay datos');

    // this.loading = false
    const startIndex = (this.currentPage - 1) * this.pageSize;

    const endIndex = startIndex + this.pageSize;

    console.log(startIndex, endIndex);

    this.paginatedData = this.data?.slice(startIndex, endIndex);
    console.log(this.paginatedData);
    // } 
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.paginateData();
  }

  dowloadFile(file: any) {

    if (!file) {
      toast.info('La grabación no existe')
      return;
    }

    // this.router.navigate(['/download', file.id])

    console.log(file);

    window.open(`https://cloudpbx.joaju.net/descargar.php?grabacion=${file}`, '_blank')

  }

  showInfo(): void {

    if (!this.initialDate) {
      toast.error('Debe seleccionar una fecha de inicio')
      return
    }

    if (!this.endDate) {
      toast.error('Debe seleccionar una fecha de fin')
      return
    }

    console.log(this.initialDate, this.endDate)

    this.getData();

  }

  getTeams() {
    const response = this.teamService.getTeams().subscribe({
      next: (data) => {
        this.teams = data.mensaje
      },
      error: (error) => {
        toast.error('Ha ocurrido un error al cargar los teams')
        console.error(error)
      },
      complete: () => {
        response.unsubscribe()
      }
    })
  }
}