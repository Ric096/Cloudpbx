import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { DatePipe } from '@angular/common';
import { LayoutComponent } from '../components/layout/layout.component';
import { FooterComponent } from "../components/footer/footer.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PaginatorComponent, DatePipe, LayoutComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, AfterViewInit {

  data: any;

  paginatedData: any[] = [];  // Datos que se mostrarán en la página actual
  currentPage: number = 1;  // Página actual
  pageSize: number = 5;  // Tamaño de cada página (número de registros por página)
  totalPages: number = 0;

  loading: boolean = false;
  arrayOfPages: number[] = [];

  constructor(private dashboardService: DashboardService) { 

  }


  tableHeaders: string[] = ['Id', 'Origen de la llamada','Destinatario','Extensión', 'Fecha', 'Duración', 'Audio'];

  ngOnInit(): void {
    this.getData();

  }
  
  ngAfterViewInit(): void {
    
  }
  
  
  getData() {
    
    this.dashboardService.getDashboardData().subscribe((data) => {
      
      console.log(data);
      
      const { mensaje } = data;
      
      this.data = mensaje;
      // Funcion para obtener el numero de paginas
      this.getTotalPages(this.data);

      this.paginateData()
      
      console.log(this.data);
    });
  }

  getTotalPages(data: any) {
    this.totalPages = Math.ceil(data.length / this.pageSize);
    console.log(this.totalPages);
    
    for (let i = 1; i <= this.totalPages; i++) {
      this.arrayOfPages.push(i);
    }
    
  }

  paginateData() {
    
    // if(!this.data){
    //   this.loading = true;
    //   console.log('no hay datos');
      
    // } else {
      console.log('ya hay datos');
      
      this.loading = false
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

    console.log(file);
    
  }


}
