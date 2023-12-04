import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ClientService } from '../services/client-service.service';
import { resourceLimits } from 'worker_threads';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private client: ClientService) {}

  username: string = '';
  password: string = '';

  HomePage() {
    this.client.login(
      {
        username: this.username,
        password: this.password,
      },
      (response: any) => {
        sessionStorage.setItem('jwt', response.jwt);
        var payload = response.jwt.split('.')[1];
        payload = atob(payload);
        var isAdm = JSON.parse(payload).isAdm;
        // if (isAdm) 
          this.router.navigate(['admin']);
        // else this.router.navigate(['user']);
      }
    );
  }

  Register(): void {
    this.router.navigate(['register']);
  }
}

// , (result: any) => {
//   console.log(this.username);
//   if (result == null)
//     alert("Incorrect Password")
//   else{
//     console.log(result);
//     sessionStorage.setItem('jwt', JSON.stringify(result))
//     this.router.navigate(['admin']);
//   }


//guard