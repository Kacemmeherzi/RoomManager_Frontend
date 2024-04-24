import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { RegistrationComponent } from './registration/registration.component';
import { MakereservationComponent } from './makereservation/makereservation.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rooms', component: RoomComponent },
  { path: 'register', component: RegistrationComponent },
  {path : 'makereservation', component :MakereservationComponent},
  {path : 'reservation', component :ReservationComponent}
  , {path : 'calendar' , component : CalendarComponent},
  {path : 'registration' , component :RegistrationComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
