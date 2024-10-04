import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent implements OnInit {

  @Input() imgSource: string;

  img: string;

  constructor() {
    // console.log(this.imgSource);
  }

  ngOnInit(): void {
    console.log(this.imgSource);
    this.img = this.imgSource;
  }

}
