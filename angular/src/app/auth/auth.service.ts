import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = 'http://localhost:3000/users';
  tokenKey = 'token';
  private token: any;

  constructor(private http: HttpClient) {}

  register(credentials: any) {
    const fullURL = `${this.baseURL}/register`;
    this.http.post<any>(fullURL, credentials).subscribe((createdUser) => {
      console.log('createdUser', createdUser);
    });
  }

  login(credentials: any) {
    const fullURL = `http://localhost:3000/auth/login`;
    this.http.post<any>(fullURL, credentials).subscribe((serverObject) => {
      this.token = serverObject.access_token;
      localStorage.setItem(this.tokenKey, serverObject.access_token);
    });
  }

  decodePayloadToken(token: any) {
    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log('payload', payload);
    return payload;
  }

  get isAdmin() {
    if(!this.token) {
      return false;
    }
    const payload = this.decodePayloadToken(this.token);
    if(payload.role === 'admin') {
      return true;
    }
    return false;
  }
}
