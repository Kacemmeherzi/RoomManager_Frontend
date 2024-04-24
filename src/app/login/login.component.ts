import { Component, OnDestroy, OnInit } from '@angular/core';
import  AuthService  from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { enableDebugTools } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { LoadingService } from '../services/laoding.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent   {
  username: string = '';
  password: string = '';
  hidelogin : boolean = false ; 
 isLoading : boolean = false ;

  constructor(private authService: AuthService, private router : Router,public  loadingService : LoadingService) {
    
  }
  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
    this.loadingService.isLoading$().subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
  hideloginform(): void {
    this.hidelogin = !this.hidelogin
  }



   login(): void {

    if (this.username.trim() === '' || this.password.trim() === '') {
      console.error('Username and password are required');
      alert("please enter your cridentials")

      return;
    }
    this.loadingService.show()

    this.authService.login(this.username, this.password).subscribe({
        next :  (response : HttpResponse<any> ) => {
          this.loadingService.hide()

          if (response.status===200) {
              this.authService.saveUser(response.body);
              this.router.navigate(["/home"])
              

          }
      


        },
        error : (err) => {console.log("aa", err.message);
        this.loadingService.hide()

        }
    
  })
  
    
    
  }
 
}  