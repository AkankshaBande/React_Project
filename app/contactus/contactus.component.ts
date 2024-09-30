import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Perform contact form submission logic here
    alert('Thanks for Contacting Us, We Will Get Back to You');
    this.router.navigate(['/home']); // Redirect to the homepage
  }

}
