import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-your-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './your-info.component.html',
  styleUrl: './your-info.component.css'
})
export class YourInfoComponent {
  yourInfoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.yourInfoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  get name() { return this.yourInfoForm.get('name') as any; }
  get email() { return this.yourInfoForm.get('email') as any; }
  get phone() { return this.yourInfoForm.get('phone') as any; }
}
