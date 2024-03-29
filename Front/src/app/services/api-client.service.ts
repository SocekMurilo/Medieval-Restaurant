import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  backend = "http://localhost:5041/";

  constructor(private http: HttpClient) { }

  get(url: String) {
    return this.http.get(this.backend + url)
  }

  post(url: String, obj: any) {
    return this.http.post(this.backend + url, obj)
  }
}
