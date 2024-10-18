import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { LayoutComponent } from "./components/layout/layout.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSonnerToaster, LayoutComponent, FooterComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'solvan-cloud-pbx';

  constructor() {}

  ngOnInit(): void {
    initFlowbite();
  }
}
