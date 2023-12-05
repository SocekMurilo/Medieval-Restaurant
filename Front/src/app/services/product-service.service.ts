import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { ProductData } from '../model/product-data';
import { consumerAfterComputation } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: ApiClientService) { }

  CreateProduct(data: ProductData)
  {
    this.http.post('product', data)
      .subscribe(response => console.log(response))
  }

  GetProduct()
  {
    var product = this.http.get('product');
    return product;
  }
}