import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup; // Definite assignment assertion

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      comments: ['', Validators.required]
    });
  }

  get name() {
    return this.feedbackForm.get('name');
  }

  get email() {
    return this.feedbackForm.get('email');
  }

  get rating() {
    return this.feedbackForm.get('rating');
  }

  get comments() {
    return this.feedbackForm.get('comments');
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      console.log('Feedback Submitted:', this.feedbackForm.value);
      // Handle form submission here (e.g., send data to a server)
    }
  }
}
