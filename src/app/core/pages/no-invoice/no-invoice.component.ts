import { Component } from '@angular/core';
import {HeadLineComponent} from "../../../shared/component/head-line/head-line.component";
import {TextComponent} from "../../../shared/component/text/text.component";
import {IconComponent} from "../../../shared/component/icon/icon.component";

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
