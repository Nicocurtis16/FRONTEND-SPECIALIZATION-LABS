import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from "./features/layout/layout.component";
import {LoginComponent} from "./component/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InvoiceApp';
}
