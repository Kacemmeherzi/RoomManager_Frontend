import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Reservation } from '../models/reservation.model';
import AuthService from './auth.service';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000/reservation';

  constructor(private http: HttpClient, private authservice : AuthService) {}  
 
  getreservations(): Observable<Reservation[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const url = `${this.apiUrl}/byuserid/${localStorage.getItem("userid")}`;
    return this.http.get<Reservation[]>(url,{headers});
  }


  addreservation(room : Room , startedDate : Date , endedDate : Date ) : Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const url = `${this.apiUrl}/add`;
const body  = {
  "userid" : localStorage.getItem("userid") ,
  "roomid" : room._id ,
  "started" : startedDate ,
  "ended" : endedDate,
}


    return this.http.post(url , body, { headers ,observe: 'response'}).pipe(
      catchError(error => {
        console.error('Error during registration', error);
        return throwError(error)
      })
    );;
  }







}