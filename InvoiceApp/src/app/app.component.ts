import { Component } from '@angular/core';
import {LoginComponent} from "./component/login/login.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InvoiceApp';
}
