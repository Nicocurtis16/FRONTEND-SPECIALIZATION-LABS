import { Component } from '@angular/core';
import {StatusPanelComponent} from "../status-panel/status-panel.component";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    StatusPanelComponent
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
