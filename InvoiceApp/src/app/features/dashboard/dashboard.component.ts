import { Component } from '@angular/core';
import {ThemeToggleComponent} from "../theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ThemeToggleComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
