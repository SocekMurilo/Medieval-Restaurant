import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-home-page-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page-user.component.html',
  styleUrl: './home-page-user.component.css'
})
export class HomePageUserComponent {
  constructor(private router: Router, private product: ProductService) {}

  listproduct: any[] = [];

  ngOnInit(): void {
    this.product.GetProduct().subscribe((data: any) => {
      this.listproduct = [];
      data.forEach((x: any) => this.listproduct.push(x));
    });
  }

  Promotion(): void {
    this.router.navigate(['promotion']);
  }
}
