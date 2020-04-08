import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  options = {
    headers: this.headers
  }

  constructor(private http: HttpClient, private router: Router) { }

  login(body){
    return this.http.post('/api/auth/login', body, this.options);
  }

  logout(){
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }

  register(body){
    this.http.post('/api/auth/register', body, this.options).subscribe();
  }

  isLoggedIn(){
    return localStorage.getItem('accessToken') !== null;
  }
}
