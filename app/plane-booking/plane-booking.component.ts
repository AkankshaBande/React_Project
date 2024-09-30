import { Component } from '@angular/core';

@Component({
  selector: 'app-plane-booking',
  templateUrl: './plane-booking.component.html',
  styleUrl: './plane-booking.component.css'
})
export class PlaneBookingComponent {
  ticket = {
    date: '',
    time: '',
    travelFrom: '',
    travelTo: '',
    class: '',
    seat: '',
    name: '',
    age: '',
    mobile: '',
    paymentMethod: ''
  };

  bookTicket() {
    alert('Your ticket is booked successfully & your seat number is 6473.');
  }
}
