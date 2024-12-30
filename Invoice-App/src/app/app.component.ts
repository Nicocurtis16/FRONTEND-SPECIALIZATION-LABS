import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from "./features/layout/layout.component";
import{HttpClientModule} from "@angular/common/http";
import {EditInvoiceComponent} from "./component/edit-invoice/edit-invoice.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, HttpClientModule, EditInvoiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Invoice-App';
}
