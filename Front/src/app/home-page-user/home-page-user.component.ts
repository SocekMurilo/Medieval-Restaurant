import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page-user.component.html',
  styleUrl: './home-page-user.component.css'
})
export class HomePageUserComponent {
  constructor(private router: Router) {}

  Ticket(): void {
    this.router.navigate(['ticket']);
  }
}
