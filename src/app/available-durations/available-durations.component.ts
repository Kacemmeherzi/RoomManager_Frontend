import { Component, ViewChild } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { DatePipe } from '@angular/common';
import { Reservation } from '../models/reservation.model';
import AuthService from '../services/auth.service';
import { CalendarOptions,DateSelectArg,EventClickArg } from '@fullcalendar/core'; // useful for typechecking
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { LoadingService } from '../services/laoding.service';

@Component({
  selector: 'app-available-durations',
  templateUrl: './available-durations.component.html',
  styleUrl: './available-durations.component.css'
})
export class AvailableDurationsComponent {
  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;

  constructor(private reservationservice : ReservationService, private authService: AuthService,private datepipe : DatePipe,public loadingService : LoadingService) {
       
  }
  isLoading : boolean = false ;
  
  isauthed(){
    return this.authService.isAuthenticated()
  }
    ngOnInit(): void {
  this.getallReservations()
  this.loadingService.isLoading$().subscribe(isLoading => {
    this.isLoading = isLoading;
  });
   
    }
    disabled: boolean = true ;
    calendarOptions: CalendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin,interactionPlugin],
      eventClick: this.handleEventClick.bind(this), // Handle event click
       select : this.rangselection.bind(this),
       selectable: true,
       slotDuration: '24:00:00', // 24 hours slot duration
       slotLabelInterval: { hours: 24 },
    };
    //TODO
    nextEvent() {
      const calendarApi = this.fullcalendar.getApi();
      const currentEvents = calendarApi.getEvents();
     
     
      
       // calendarApi.gotoDate();
      }
   
    rangselection(arg : DateSelectArg){
      const { start, end } = arg;
      const isRangeTaken = this.events.some(event => {
        const eventStart = new Date(event.start);
        const eventEnd = new Date(event.end);
        return (start >= eventStart && start <= eventEnd) || (end >  eventStart && end <= eventEnd);
      });
         if(isRangeTaken){
          alert('make sure to select unrserved dates')
          this.fullcalendar.getApi().unselect
         }    else  {
          this.disabled= false
            alert(start+" "+end)        
         }
      
    }
  
  
  reservations? : Reservation[] 
   events ? : any[] 
  handleEventClick(clickInfo: EventClickArg) {
   const res =  this.reservations.find((reservation)=>(reservation._id==clickInfo.event.id))
    alert('reservaryion          '+JSON.stringify(res) )
  }
     getallReservations() {
      this.loadingService.show()

     this.reservationservice.getallreservations()
        .subscribe(reservations =>{this.reservations = reservations.body;
  
          this.events = this.reservations.map(reservation =>({
            id : reservation._id,
            title : "Reservation",
            start :this.datepipe.transform(reservation.started,'yyyy-MM-ddTHH:mm:ss') ,
            end : this.datepipe.transform(reservation.ended,'yyyy-MM-ddTHH:mm:ss') 
          })


        )
        this.loadingService.hide()

          console.log(this.events);
          
        }
  
  
        );
  
    }
}
