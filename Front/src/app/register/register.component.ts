import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  constructor(private router: Router) {};

  name: string = "";
  sobrenome: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  NavigateToLogin(): void{
    this.router.navigate(['']); // com dados
  }

  NavigateToCancel(): void{
    this.router.navigate(['']);
  }
}