import { Component } from '@angular/core';
import {HeadLineComponent} from "../head-line/head-line.component";
import {TextComponent} from "../text/text.component";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-no-invoice',
  standalone: true,
  imports: [
    HeadLineComponent,
    TextComponent,
    IconComponent
  ],
  templateUrl: './no-invoice.component.html',
  styleUrl: './no-invoice.component.css'
})
export class NoInvoiceComponent {

}
