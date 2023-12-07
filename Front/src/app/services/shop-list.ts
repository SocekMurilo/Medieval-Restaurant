import { Injectable } from '@angular/core';
import { ProductData } from '../model/product-data';
import { ProductService   } from './product-service.service';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root',
})
export class ShopListService {
    cart: ProductData[] = [];

    initcart() {
        let initcart: ProductData[] = [];
        localStorage.setItem('cart', JSON.stringify(initcart))
    }

    addCart( product: ProductData) {
        this.cart.push(product);
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }

    getCart() {
        var storageCart = localStorage.getItem('cart')

        if(storageCart === null)
            return null

        let data = JSON.parse(storageCart);
        return data;
    }

    updateCart(cart: ProductData[]) {
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}