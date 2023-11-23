import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {};

  NavigateToRegister(): void{
    this.router.navigate(['register']);
  }

  NavigateToHomePage(): void{
    this.router.navigate(['']);
  }

  username: string = "";
  password: string = "";
}