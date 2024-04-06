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
import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePipe, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RoomComponent,
    NavbarComponent,
    
    RegistrationComponent,
          ReservationComponent,
          MakereservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,MatListModule,MatIconModule,MatFormFieldModule, MatInputModule,
     MatSelectModule,MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe 
    
  ],
  providers: [AuthService, provideAnimationsAsync(),provideNativeDateAdapter(),DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
