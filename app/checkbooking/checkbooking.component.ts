import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkbooking',
  templateUrl: './checkbooking.component.html',
  styleUrl: './checkbooking.component.css'
})
export class CheckbookingComponent {

  bookings = [
    { id: 1, type: 'Bus', route: 'City A to City B', departure: '10:00 AM', status: 'Confirmed' },
    { id: 2, type: 'Bus', route: 'City C to City D', departure: '11:30 AM', status: 'Confirmed' },
    { id: 3, type: 'Train', route: 'City E to City F', departure: '09:00 AM', status: 'Confirmed' },
    { id: 4, type: 'Train', route: 'City G to City H', departure: '12:00 PM', status: 'Confirmed' },
    { id: 5, type: 'Plane', route: 'City I to City J', departure: '02:00 PM', status: 'Confirmed' },
    { id: 6, type: 'Plane', route: 'City K to City L', departure: '04:00 PM', status: 'Confirmed' }
  ];

  constructor(private router: Router) {}

  cancelTicket(bookingId: number) {
    const confirmation = confirm('Do you really want to cancel?');
    if (confirmation) {
      alert('Ticket canceled successfully. Money will be refunded in the next 24 hours.');
      this.router.navigate(['/home']);
    }
  }
}
