import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { HeadLineComponent } from "../../features/head-line/head-line.component";
import { IconComponent } from "../../features/icon/icon.component";
import { TextComponent } from "../../features/text/text.component";
import { AuthService } from '../../service/auth.service';
import { Notification, NotificationService } from '../../service/notification.service';

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
export class LoginComponent implements OnInit {
  form!: FormGroup;

  // constructor(
  //     private authService: AuthService,
  //     private notificationService: NotificationService, // Inject NotificationService for displaying notifications
  //     private router: Router // Inject Router for navigation
  // ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(){}

  // onSubmit() {
  //   if (this.form.valid) {
  //     console.log('data submitted')
  //     const { username, password } = this.form.value;
  //     this.authService.login(username, password).subscribe({
  //       next: () => {
  //         // Navigate to the dashboard or home page on successful login
  //         this.notificationService.showNotification('login sucesfully.', 'success');
  //
  //         this.router.navigate(['layout/invoice']);
  //         console.log('this.form.value')
  //
  //       },
  //       error: (error) => {
  //         // Display error toast or log error
  //         console.error('Login failed:', error);
  //       },
  //     });
  //   }
  // }
}
