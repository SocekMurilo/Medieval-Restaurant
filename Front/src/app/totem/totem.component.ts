import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../services/product-service.service';
import { ProductData } from '../model/product-data';

@Component({
  selector: 'app-totem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './totem.component.html',
  styleUrl: './totem.component.css'
})
export class TotemComponent {
  constructor (private router: Router, private product: ProductService) {}

  listproduct: any[] = [];
  listqty: ProductData[] = []

  cart: ProductData[] = [];

  qty: Number = 0

  ngOnInit(): void {
    this.product.GetProduct().subscribe((data: any) => {
      this.listproduct = [];
      data.forEach((x: any) => this.listproduct.push(x));
    });
  }

  addProductCarts(item: any) {
    var qty = 0;

    this.cart.forEach((element) => {
      if (element.name == item.name){
        element.quantity++;
        qty++;
      }
    })

    if(qty == 0){
      this.cart.push({
          id: item.id,
          name: item.name,
          description: item.description,
          value: item.value,
          type: item.type,
          quantity: item.quantity
      });
    } 

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  Cart(){
    this.router.navigate(['admin/totem/cart']);
  }

}
