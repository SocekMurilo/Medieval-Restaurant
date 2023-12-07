import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductData } from '../model/product-data';
import { elementAt } from 'rxjs';
import { ShopListService } from '../services/shop-list';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private router: Router, private service: ShopListService) { }

  totalBuy: number = 0;

  qty: number = 1

  cancel: ProductData[] = [];

  cart: ProductData[] = [];

  ngOnInit(): void {
    var loadcart = localStorage.getItem('cart')

    if (loadcart == null) {
      return console.log("Product Invalid")
    }

    this.cart = JSON.parse(loadcart);
    this.updatePrice();

  }

  AddQuantity(item: any) {
    this.cart.forEach((element) => {
      if (element.id == item.id)
        element.quantity++;
    })
  }
  RemoveQuantity(item: any) {
    this.cart.forEach((element, index) => {
      if (element.id == item.id){
        element.quantity--;
        if (element.quantity < 1){
          this.cart.splice(index, 1);
        }
      }

  })
}

  addOrder() {
    var listorder: any[] = [];



    if (this.cart.length > 0) {
      this.cart.forEach((element) => {
        var item: any = {
          id: element.id,
          quantity: element.quantity,
          total: this.totalBuy
        };
        listorder.push(item);
      });
    }

  }
  

  updatePrice() {
    this.totalBuy = 0
    this.cart.forEach((element) => {
      this.totalBuy += element.value + element.quantity;
    })
  }



}
