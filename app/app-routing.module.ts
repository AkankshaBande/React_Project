import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckscheduleComponent } from './checkschedule/checkschedule.component';
import { CheckbookingComponent } from './checkbooking/checkbooking.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BusBookingComponent } from './bus-booking/bus-booking.component';
import { PlaneBookingComponent } from './plane-booking/plane-booking.component';
import { TrainRegistrationComponent } from './train-registration/train-registration.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"checkschedule",component:CheckscheduleComponent},
  {path:"checkbooking",component:CheckbookingComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},

  {path:"train-registration",component:TrainRegistrationComponent},

  {path:"plain-booking",component:PlaneBookingComponent},

  {path:"bus-booking",component:BusBookingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
