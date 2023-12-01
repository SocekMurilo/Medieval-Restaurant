import { Injectable } from '@angular/core';
import { ClientData } from '../model/client-data';
import { ApiClientService } from './api-client.service';
import { ClientLogin } from '../model/client-login';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  constructor(private http: ApiClientService) { }

  login(data: ClientLogin, callback: any)
  {
    this.http.post('user/login', data).subscribe((response) => callback(response))
  }

  register(data: ClientData)
  {
    this.http.post('user/register', data)
  }
}
