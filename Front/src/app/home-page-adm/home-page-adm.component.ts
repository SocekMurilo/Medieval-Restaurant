import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-page-adm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page-adm.component.html',
  styleUrl: './home-page-adm.component.css'
})
export class HomePageAdmComponent {
  constructor (private router: Router) {}

  NavigateToAddProduct(){
    this.router.navigate(['admin/addproduct']);
  }

  NavigateToTotem(){
    this.router.navigate(['admin/totem']);
  }

  NavigateToOrders(){
    this.router.navigate(['admin/orders']);
  }

}
