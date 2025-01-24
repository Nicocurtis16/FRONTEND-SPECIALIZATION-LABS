import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeadLineComponent } from "../../features/head-line/head-line.component";
import { IconComponent } from "../../features/icon/icon.component";
import { TextComponent } from "../../features/text/text.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HeadLineComponent,
    IconComponent,
    TextComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Fixed typo from `styleUrl` to `styleUrls`
})
export class LoginComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
