import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  router: any;
 

  login() {
    if (this.username && this.password) {
      alert('Login successfully');
      this.router.navigate(['/home']);
    } else {
      alert('Please enter both username and password');
    }
  }

}
