import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = 'http://localhost:3000/users';
  tokenKey = 'token';

  constructor(private http: HttpClient) {}

  register(credentials: any) {
    const fullURL = `${this.baseURL}/register`;
    this.http.post<any>(fullURL, credentials).subscribe((createdUser) => {
      console.log('createdUser',createdUser);
    });
  }

  login(credentials: any) {
    const fullURL = `http://localhost:3000/auth/login`;
    this.http.post<any>(fullURL, credentials).subscribe(serverObject => {
      localStorage.setItem(this.tokenKey, serverObject.access_token);
    });
  }
}
