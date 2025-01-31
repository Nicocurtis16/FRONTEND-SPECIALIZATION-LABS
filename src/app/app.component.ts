import { Component } from '@angular/core';
import {LoginComponent} from "./core/pages/login/login.component";
import {DashboardComponent} from "./core/component/dashboard/dashboard.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, DashboardComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InvoiceApp';
}
