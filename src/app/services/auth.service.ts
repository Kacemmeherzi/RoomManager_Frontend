// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
   private  apiUrl = 'http://localhost:3000/auth/login';
      logged : boolean = false   ;

  constructor(private http: HttpClient) {}
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  login(username: string, password: string):Observable<HttpResponse<any>> {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { username, password };

    return this.http.post(this.apiUrl, body, { headers ,observe: 'response'}).pipe(
      catchError(error => {
        console.error('Error during login', error);
        return throwError(error);
      })
    );
  }

}
