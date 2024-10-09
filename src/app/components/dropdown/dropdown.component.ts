import { Component, Input } from '@angular/core';
// import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';


@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

  @Input() data: any;
  @Input() key: any;
  
  showDropdown: boolean = false;
  
  showInfo() {
    console.log(this.data);

    console.log('se hizo click pero no aparece el dropdown jeje');
    this.showDropdown = !this.showDropdown;

  }


}
