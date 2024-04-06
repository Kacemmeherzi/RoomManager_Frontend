import { Component } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import AuthService from '../services/auth.service';
import { Router } from '@angular/router';
import { Reservation } from '../models/reservation.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  constructor(private reservationservice: ReservationService,  private authService: AuthService, private router : Router) {}
 reservations? : Reservation[]
 
  ngOnInit(): void {
    this.getRooms();
    
    
  }
  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
  getRooms(): void {
    this.reservationservice.getreservations()
      .subscribe(reservations => this.reservations = reservations);
      
     
  }
}
