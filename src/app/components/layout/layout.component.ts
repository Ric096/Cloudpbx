import { Component } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private router: Router) {
    
  }

  logout() {
    localStorage.clear();
    toast.info('Sesión cerrada');
    this.router.navigate(['/login']);
    // cookies.remove('user');
    console.log('ha cerrado sesión')
  }

}
