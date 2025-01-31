import { Component } from '@angular/core';
import {ThemeToggleComponent} from "../theme-toggle/theme-toggle.component";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {InvoiceComponent} from "../../pages/invoice/invoice.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ThemeToggleComponent,
    SidebarComponent,
    InvoiceComponent,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
