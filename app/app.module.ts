import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CheckscheduleComponent } from './checkschedule/checkschedule.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckbookingComponent } from './checkbooking/checkbooking.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BusBookingComponent } from './bus-booking/bus-booking.component';
import { PlaneBookingComponent } from './plane-booking/plane-booking.component';
import { TrainRegistrationComponent } from './train-registration/train-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckscheduleComponent,
    CheckbookingComponent,
    FeedbackComponent,
    ContactusComponent,
    AboutusComponent,
    LoginComponent,
    SignupComponent,
    BusBookingComponent,
    PlaneBookingComponent,
    TrainRegistrationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
