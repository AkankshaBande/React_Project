import { Component } from '@angular/core';

@Component({
  selector: 'app-bus-booking',
  templateUrl: './bus-booking.component.html',
  styleUrl: './bus-booking.component.css'
})
export class BusBookingComponent {
  ticket = {
    date: '',
    time: '',
    travelFrom: '',
    travelTo: '',
    seat: '',
    name: '',
    age: '',
    mobile: '',
    paymentMethod: ''
  };

  bookTicket() {
    alert('Your ticket is booked successfully & your seat number is 64.');
  }

}
