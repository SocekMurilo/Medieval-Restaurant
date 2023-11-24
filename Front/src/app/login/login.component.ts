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
    if (this.username == "adm")
      this.router.navigate(['admin']);
    else 
      this.router.navigate(['user']);
  }

  username: string = "adm";
  password: string = "";
}