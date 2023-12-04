import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ClientService } from '../services/client-service.service';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  constructor(private router: Router, private client: ClientService) {};


  name: string = "";
  lastName: string = "";
  email: string = "";
  cpf: string = "";
  password: string = "";
  confirmPassword: string = ""; 

  username: string = "";

  Register()
  {
    if (this.name == null || this.lastName == null || this.email == null || this.cpf == null || this.password == null || this.confirmPassword == null)
      alert("Fill in all fields")

    else if(this.password !== this.confirmPassword)
      alert("Password is not the same as confirm password")

    else
    {
      this.username = this.name + " " + this.lastName;
      const response = this.client.register({
        name: this.username,
        email: this.email,
        cpf: this.cpf,
        password: this.password 
      });
      this.router.navigate(['']);
    }
  }

  Cancel()
    {
      this.router.navigate(['']);
    }
}