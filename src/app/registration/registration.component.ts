import { Component } from '@angular/core';
import AuthService from '../services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingService } from '../services/laoding.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';
  email : string = '' ; 
  constructor(private authservice : AuthService , private router : Router, private loadingService : LoadingService){}


  isLoggedIn(): boolean {
    return this.authservice.isAuthenticated();
  }

  register(): void {
    if (this.username.trim() === '' || this.password.trim() === '' || this.email.trim()==='') {
      console.error('Username and password are required');
      return; // Prevent form submission
    }
    
this.loadingService.show()
    this.authservice.register(this.username, this.password,this.email).subscribe(
   {   next : (Response : HttpResponse<any>) => {
            if(Response.status===201 ){
              alert("created");
              
              this.loadingService.hide()

            }

   },

     error :  (err) => {
      this.loadingService.hide()
      console.log(err.message);
      alert(err.message)
      

     }

   }
    );
  }    
}
