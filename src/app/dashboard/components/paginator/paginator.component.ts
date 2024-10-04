import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {

  @Input() currentPage: number = 1;
  @Input() totalPages: number;
  @Input() arrayOfPages: number[];

  // arrayOfPages: number[] = [];

  @Output() changePage = new EventEmitter<number>();

  constructor() {}


  prevPage() {

    if (this.currentPage > 1) {
      this.currentPage--;
      this.changePage.emit(this.currentPage);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.changePage.emit(this.currentPage);
    }
  }  

  goToPage(page: number) {
    this.currentPage = page;
    this.changePage.emit(this.currentPage);
  }

}
