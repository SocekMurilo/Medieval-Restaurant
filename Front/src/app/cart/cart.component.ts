import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductData } from '../model/product-data';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  // constructor(private router: Router, private product: ProductData) {}

  // totalBuy: Number = 0;

  // cancel: ProductData[] = []

  // addOrder() {
  //   var list: any[] = [];
    
  //   if (this.product.length > 0) {
  //     this.carrinho.forEach((element) => {
  //       var item: TipoEspecial = {
  //         Id: element.id,
  //         Quantidade: element.quantidade,
  //         Total: this.totalCompra,
  //       };
  //       list.push(item);
  //     });
  // }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
