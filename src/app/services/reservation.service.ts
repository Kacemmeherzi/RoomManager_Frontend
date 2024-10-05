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
  private apiUrl1 = 'http://localhost:3000/operation';


  constructor(private http: HttpClient, private authservice : AuthService) {}  
 
  getreservations(): Observable<Reservation[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const url = `${this.apiUrl}/byuserid/${localStorage.getItem("userid")}`;
    return this.http.get<Reservation[]>(url,{headers});
  }
  getallreservations(): Observable<HttpResponse<Reservation[]>> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const url = `${this.apiUrl}/`;
    return this.http.get<Reservation[]>(url,{headers,observe:'response'});
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


    return this.http.post(url , body, { headers ,observe: 'response'})  
  }


deleteReservation (reservationid  , operation) { 
  const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);


  const url1 = `${this.apiUrl1}/createop/`;
  const body  = {
    "resid" : reservationid ,
    "oper" : 'deleteoperation' ,
    "content" : "",
    "userid" : localStorage.getItem("userid") ,

  }
  return this.http.post(url1,body, {headers, observe: "response"})

}




}