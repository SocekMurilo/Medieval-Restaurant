import { Injectable } from '@angular/core';
import { ClientData } from '../model/client-data';
import { ApiClientService } from './api-client.service';
import { ClientLogin } from '../model/client-login';

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
}
