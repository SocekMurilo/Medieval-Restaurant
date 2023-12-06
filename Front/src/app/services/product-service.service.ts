import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { ProductData } from '../model/product-data';
import { Observable, map } from "rxjs";
import { response } from 'express';

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

  GetProduct(): Observable<any[]> {
    return this.http.get('product')
    .pipe(map((response: any) => {
      return response;
    })
    );
  }
}