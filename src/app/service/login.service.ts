import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLogin(): Observable<Login[]> {
    return this.http.get<Login[]>('http://localhost:8080/login')
  }

  login(creds: Login) {
    return this.http.post('http://localhost:8080/login', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ', '');

      localStorage.setItem('token', token);

      return body;
    }))
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
