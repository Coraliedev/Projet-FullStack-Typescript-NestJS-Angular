import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  register(credentials: any) {
    const fullURL = `${this.baseURL}/register`;
    this.http.post<any>(fullURL, credentials).subscribe((createdUser) => {
      console.log('createdUser',createdUser);
    });
  }
}
