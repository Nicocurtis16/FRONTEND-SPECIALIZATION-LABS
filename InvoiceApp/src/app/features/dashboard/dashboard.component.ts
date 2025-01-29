import { Component } from '@angular/core';
import {ThemeToggleComponent} from "../theme-toggle/theme-toggle.component";
import {SidebarComponent} from "../../component/sidebar/sidebar.component";
import {InvoiceComponent} from "../../component/invoice/invoice.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ThemeToggleComponent,
    SidebarComponent,
    InvoiceComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
