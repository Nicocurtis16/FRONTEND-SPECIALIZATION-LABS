import { Component } from '@angular/core';
import {ThemeToggleComponent} from "../theme-toggle/theme-toggle.component";
import {SidebarComponent} from "../../component/sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ThemeToggleComponent,
    SidebarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
