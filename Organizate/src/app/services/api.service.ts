import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiUrl = environment.urlBase;
  public endpoints = environment.endpoints.users;

  constructor(private http: HttpClient) { }
  

  createUser(user: User) {
    const url = `${this.apiUrl}/${this.endpoints}/register`;
    const headers = new HttpHeaders().set('x-tenant-id', '65a08aa8ca25da4080df7bc9');
    const body = {
      name: user.name,
      email: user.email,
      password: user.password
    };

    const request = this.http.post(url, body, { headers });
    console.log(request)
    return request;
  }

  loginUser(email: string, password: string) {
    const url = `${this.apiUrl}/${this.endpoints}/login`;
    const headers = new HttpHeaders().set('x-tenant-id', '65a08aa8ca25da4080df7bc9');
    const body = {
      email,
      password
    };

    const request = this.http.post(url, body, { headers });

    return request;
  }
}
