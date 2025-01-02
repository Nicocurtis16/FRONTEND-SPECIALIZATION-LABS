import { Component } from '@angular/core';
import {HeadLineComponent} from "../head-line/head-line.component";
import {TextComponent} from "../text/text.component";

@Component({
  selector: 'app-no-invoice',
  standalone: true,
  imports: [
    HeadLineComponent,
    TextComponent
  ],
  templateUrl: './no-invoice.component.html',
  styleUrl: './no-invoice.component.css'
})
export class NoInvoiceComponent {

}
