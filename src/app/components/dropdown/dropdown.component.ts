import { Component, Input, output } from '@angular/core';
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
  @Input() key: string;
  @Input() cleanField: boolean;
  @Input() title: string

  selectedTeam = output<string>()

  showDropdown: boolean = false;
  element:any
  // selectedTeam: any;
  
  showInfo() {
    console.log(this.data);

    this.showDropdown = !this.showDropdown;
  }

  selectTeam(selectedElement: any) {

    const key = this.key

    this.element = selectedElement

    console.log(this.element[key]);

    this.showDropdown = false;

    this.selectedTeam.emit(selectedElement)

    // console.log(this.cleanField); 

    this.clearteam(selectedElement)
  }

  clearteam(selectedElement:any) {

    this.cleanField ? this.element = '' : this.element = selectedElement

  }

}
