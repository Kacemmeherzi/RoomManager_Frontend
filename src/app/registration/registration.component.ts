import { Component } from '@angular/core';
import AuthService from '../services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';
  email : string = '' ; 
  constructor(private authservice : AuthService , private router : Router){}


  isLoggedIn(): boolean {
    return this.authservice.isAuthenticated();
  }

  register(): void {
    if (this.username.trim() === '' || this.password.trim() === '' || this.email.trim()==='') {
      console.error('Username and password are required');
      return; // Prevent form submission
    }

    this.authservice.register(this.username, this.password,this.email).subscribe(
      (response: HttpResponse<any>) => {
        // Check the status code
        if (response.status === 201) {
          // Check if login was successful (adjust this based on your server response)
          if (response.body) {
                    
            console.log('registration successful', response);
          } else {
            console.error('registration failed', response.body);
          }
        } else {
          console.error('registration failed', response.status);
        }
      },
      (error) => {
        // Handle login error
        console.error('registration  failed', error);
      }
    );
  }

}
