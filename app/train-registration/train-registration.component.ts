import { Component } from '@angular/core';

@Component({
  selector: 'app-train-registration',
  templateUrl: './train-registration.component.html',
  styleUrl: './train-registration.component.css'
})
export class TrainRegistrationComponent {
  ticket = {
    date: '',
    time: '',
    travelFrom: '',
    travelTo: '',
    coach: '',
    seat: '',
    name: '',
    age: null,
    mobile: '',
    paymentMethod: ''
  };

  coaches = ['S1', 'S2', 'S3', 'S4', 'B1', 'B2', 'B3'];

  bookTicket() {
    alert(`Your ticket is booked successfully & your PNR Number is 4728728481, seat number is 30, coach is ${this.ticket.coach}.`);
  }
}
