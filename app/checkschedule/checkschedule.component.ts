import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkschedule',
  templateUrl: './checkschedule.component.html',
  styleUrl: './checkschedule.component.css'
})
export class CheckscheduleComponent {
  schedules = [
    { type: 'Train', name: 'Express 123', fromCity: 'City A', toCity: 'City B', time: '10:00 AM', date: '2024-09-10' },
    { type: 'Bus', name: 'Bus 456', fromCity: 'City C', toCity: 'City D', time: '12:00 PM', date: '2024-09-11' },
    { type: 'Plane', name: 'Flight 789', fromCity: 'City E', toCity: 'City F', time: '2:00 PM', date: '2024-09-12' },
    // Add more schedules as needed
  ];

  filters = {
    date: '',
    time: '',
    fromCity: '',
    toCity: ''
  };

  filteredSchedules = this.schedules;

  constructor(private router: Router) {}

  applyFilters() {
    this.filteredSchedules = this.schedules.filter(schedule => {
      return (!this.filters.date || schedule.date === this.filters.date) &&
             (!this.filters.time || schedule.time === this.filters.time) &&
             (!this.filters.fromCity || schedule.fromCity.toLowerCase().includes(this.filters.fromCity.toLowerCase())) &&
             (!this.filters.toCity || schedule.toCity.toLowerCase().includes(this.filters.toCity.toLowerCase()));
    });
  }

  bookTicket(schedule: any) {
    // Navigate to the book ticket page with the selected schedule details
    this.router.navigate(['/book-ticket'], { queryParams: { type: schedule.type, name: schedule.name, fromCity: schedule.fromCity, toCity: schedule.toCity, time: schedule.time, date: schedule.date } });
  }

};
