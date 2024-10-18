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
  @Input() key: any;

  selectedTeam = output<string>()

  showDropdown: boolean = false;
  team:string
  // selectedTeam: any;
  
  showInfo() {
    console.log(this.data);

    console.log('se hizo click pero no aparece el dropdown jeje');
    this.showDropdown = !this.showDropdown;
  }

  selectTeam(team: string) {

    this.team = team

    this.showDropdown = false;

    this.selectedTeam.emit(team)
    
  }


}
