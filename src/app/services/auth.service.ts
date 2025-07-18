import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  #apiUrl = 'https://localhost:7011/api/Auth';

  constructor(private http: HttpClient) { }

  public login(credentials: Login): Observable<APIResponse> {
    const params = new HttpParams()
      .set('login', credentials.email)
      .set('password', credentials.password);

    return this.http.get<APIResponse>(`${this.#apiUrl}/login`, { params });
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
