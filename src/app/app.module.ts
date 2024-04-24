import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import AuthService from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MakereservationComponent } from './makereservation/makereservation.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePipe, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { LoadingComponent } from './loading/loading.component';
import {MatCardModule} from '@angular/material/card';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AvailableDurationsComponent } from './available-durations/available-durations.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RoomComponent,
    NavbarComponent,
    
    RegistrationComponent,
          ReservationComponent,
          MakereservationComponent,
          LoadingComponent,
          CalendarComponent,
          AvailableDurationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,MatListModule,MatIconModule,MatFormFieldModule, MatInputModule,
     MatSelectModule,MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule,   MatCardModule,FullCalendarModule,
     
    
  ],
  providers: [AuthService, provideAnimationsAsync(),provideNativeDateAdapter(),DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
