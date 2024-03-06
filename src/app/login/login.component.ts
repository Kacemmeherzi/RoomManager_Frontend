import { Component, OnInit } from '@angular/core';
import  AuthService  from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { enableDebugTools } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  username: string = '';
  password: string = '';
  

  constructor(private authService: AuthService, private router : Router) {}
    


   login(): void {
    if (this.username.trim() === '' || this.password.trim() === '') {
      console.error('Username and password are required');
      return; // Prevent form submission
    }

    this.authService.login(this.username, this.password).subscribe(
      (response: HttpResponse<any>) => {
        // Check the status code
        if (response.status === 200) {
          // Check if login was successful (adjust this based on your server response)
          if (response.body && response.body.message == "connected") {
            // Navigate to the home component
            this.router.navigate(['/home']);
            console.log('Login successful', response);
          } else {
            console.error('Login failed', response.body);
          }
        } else {
          console.error('Login failed', response.status);
        }
      },
      (error) => {
        // Handle login error
        console.error('Login failed', error);
      }
    );
  }
    
    
  }

