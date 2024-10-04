import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { toast, NgxSonnerToaster } from 'ngx-sonner';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSonnerToaster],
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
