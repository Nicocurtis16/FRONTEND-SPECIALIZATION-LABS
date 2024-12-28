import { Component } from '@angular/core';
import {TextComponent} from "../../features/text/text.component";
import {BadgeComponent} from "../../features/badge/badge.component";
import {ButtonComponent} from "../../features/button/button.component";
import {HeadLineComponent} from "../../features/head-line/head-line.component";

@Component({
  selector: 'app-view-invoice',
  standalone: true,
  imports: [
    TextComponent,
    BadgeComponent,
    ButtonComponent,
    HeadLineComponent
  ],
  templateUrl: './view-invoice.component.html',
  styleUrl: './view-invoice.component.css'
})
export class ViewInvoiceComponent {

}
