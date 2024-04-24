import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Room } from '../models/room.model';
import { Router } from '@angular/router';
import { RoomService } from '../services/room.service';
import { ReservationService } from '../services/reservation.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import AuthService from '../services/auth.service';

@Component({
  selector: 'app-makereservation',
  templateUrl: './makereservation.component.html',
  styleUrl: './makereservation.component.css'
})
export class MakereservationComponent implements OnInit  {
  constructor(private roomService: RoomService, private reservationService :ReservationService,private router : Router,
    private formBuilder: FormBuilder, private datePipe: DatePipe, private authservice :AuthService) {
    this.form = this.formBuilder.group({
      selectedOption: ['', Validators.required],
      selectedStartDate: ['', Validators.required],
      selectedEndDate: ['', Validators.required]


    });
  }
 
duration : number = 0 ; 
rooms? : Room[] ;
room!: Room  ;
form : FormGroup  ;
start :   String  ='';
end : String = '' ;




ngOnInit(): void {
  this.roomService.getRooms()
  .subscribe(rooms =>{ this.rooms = rooms;
  this.room = rooms[0]});


}
isAuthed(){
   return  this.authservice.isAuthenticated()
}


onSubmit() {
  console.log(this.form.value);
  
  this.start   = this.datePipe.transform(this.form.value.selectedStartDate, 'yyyy-MM-ddTHH:mm:ss');
  
 this.end = this.datePipe.transform(this.form.value.selectedEndDate, 'yyyy-MM-ddTHH:mm:ss');
 console.log("sa",this.start);
console.log("end", this.end) 

 
this.addreservation(this.start,this.end,this.room)
 
}
addreservation(start , end ,room : Room) : void {
  
  this.reservationService.addreservation(room,start,end).subscribe({
  next :   (response) => {
      if (response.status === 201) {
        //
       
          alert(response.body.message)               
      
          console.error('   failed', response.body);
        }
      else {
        console.error(' failed', response.status);
      }
    },  
  error : (err) =>{
    alert(err.message)
  }
  
  });
  
}
}
