import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page-user.component.html',
  styleUrl: './home-page-user.component.css'
})
export class HomePageUserComponent {
    constructor() {}
}
