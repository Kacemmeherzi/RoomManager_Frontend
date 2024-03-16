import { Component } from '@angular/core';
import AuthService from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor( private authService: AuthService, private router : Router){
 
}
isLoggedIn(): boolean {
  return this.authService.logged;
}
}
