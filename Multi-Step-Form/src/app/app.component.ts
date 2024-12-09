import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from '../app/Component/SignUp/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SignUpComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MainSignUp';
}
