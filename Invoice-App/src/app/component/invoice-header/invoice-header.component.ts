import { Component } from '@angular/core';
import {HeadLineComponent} from "../../features/head-line/head-line.component";
import {TextComponent} from "../../features/text/text.component";
import {ButtonComponent} from "../../features/button/button.component";

@Component({
  selector: 'app-invoice-header',
  standalone: true,
  imports: [
    HeadLineComponent,
    TextComponent,
    ButtonComponent
  ],
  templateUrl: './invoice-header.component.html',
  styleUrl: './invoice-header.component.css'
})
export class InvoiceHeaderComponent {

}
