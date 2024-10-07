import { Component } from '@angular/core';
import { TooltipComponent } from "../tooltip/tooltip.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TooltipComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
