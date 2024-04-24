import { Component } from '@angular/core';
import { Room } from '../models/room.model';
import { RoomService } from '../services/room.service';
import AuthService from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
 
  rooms?: Room[];

  constructor(private roomService: RoomService,  private authService: AuthService, private router : Router) {}
 
 
  ngOnInit(): void {
    this.getRooms();
    
  }
  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
  getRooms(): void {
    this.roomService.getRooms()
      .subscribe(rooms => this.rooms = rooms);
      console.log()
  }
}
