// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
   private  apiUrl = 'http://localhost:3000/auth/';

  constructor(private http: HttpClient, private router : Router) {}
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  login(username: string, password: string):Observable<HttpResponse<any>> {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { username, password };

    return this.http.post(this.apiUrl+"login", body, { headers ,observe: 'response'}).pipe(
      catchError(error => {
        console.error('Error during login', error);
        return throwError(error);
      })
    );
  }
  register(username: string, password: string, email : string):Observable<HttpResponse<any>> {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { username, password ,email };

    return this.http.post(this.apiUrl+"register", body, { headers ,observe: 'response'}).pipe(
      catchError(error => {
        console.error('Error during registration', error);
        return throwError(error);
      })
    );
  }
  logout () {
localStorage.clear()

  }
  

}
