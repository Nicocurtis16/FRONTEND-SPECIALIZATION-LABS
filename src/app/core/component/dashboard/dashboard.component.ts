import { Component } from '@angular/core';
import {ThemeToggleComponent} from "../theme-toggle/theme-toggle.component";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {InvoiceComponent} from "../../pages/invoice/invoice.component";
import {RouterOutlet} from "@angular/router";
import {SliderComponent} from "../../feature/slider/slider.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ThemeToggleComponent,
    SidebarComponent,
    InvoiceComponent,
    RouterOutlet,
    SliderComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
