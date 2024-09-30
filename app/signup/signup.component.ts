import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {} // Inject the Router

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Process the signup (e.g., send data to the server)
    console.log("User signed up with the following details:", this.user);

    // Simulate a successful sign-up and route to the home page
    this.router.navigate(['/home']); // Navigate to the home page after successful sign-up

    // Reset form after submission
    this.user = {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
}
