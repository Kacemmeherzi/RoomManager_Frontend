// room.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:3000/room/freerooms';

  constructor(private http: HttpClient) {}
  // Get all rooms
  getRooms(): Observable<Room[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);


    return this.http.get<Room[]>(this.apiUrl,{headers});
  }

  // Get room by ID
  getRoom(id: number): Observable<Room> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Room>(url);
  }

  // Add new room
  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room);
  }

  // Update room
  updateRoom(room: Room): Observable<Room> {
    const url = `${this.apiUrl}/${room._id}`;
    return this.http.put<Room>(url, room);
  }

  // Delete room
  deleteRoom(id: number): Observable<Room> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Room>(url);
  }
}
