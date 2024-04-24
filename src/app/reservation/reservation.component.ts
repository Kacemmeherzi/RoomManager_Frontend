import { Component } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import AuthService from '../services/auth.service';
import { Router } from '@angular/router';
import { Reservation } from '../models/reservation.model';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  constructor(private reservationservice: ReservationService,  private authService: AuthService, private router : Router) {}
 reservations? : Reservation[]
 
 calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  plugins: [dayGridPlugin],
  events : this.reservations
};
  ngOnInit(): void {
    this.getReservations();
    
    
  }
  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
    getReservations(): void {
      this.reservationservice.getreservations()
        .subscribe(reservations => {this.reservations = reservations;
          console.log(this.reservations);
        
        });
        
        
      
    }
  deleteRerservation(id) {
    console.log(id);
    
    this.reservationservice.deleteReservation(id).subscribe(
      {next :(Response)=>{
        console.log(Response);
        this.getReservations()
      }}
    )
  }
}
