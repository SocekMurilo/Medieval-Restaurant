import { Injectable } from '@angular/core';
import { ClientData } from '../model/client-data';
import { ApiClientService } from './api-client.service';
import { ClientLogin } from '../model/client-login';
import { ProductData } from '../model/product-data';
import { cwd } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: ApiClientService) { }

  login(data: ClientLogin, callback: any)
  {
    this.http.post('user/login', data)
      .subscribe((response) => callback(response))
  }

  register(data: ClientData)
  {
    this.http.post('user/register', data)
      .subscribe(response => console.log(response))
  }

  CreateProduct(data: ProductData)
  {
    this.http.post('product', data)
      .subscribe(response => console.log(response))
  }
}
