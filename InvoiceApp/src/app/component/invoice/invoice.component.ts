import {Component, signal} from '@angular/core';
import {Invoice} from "../../service/invoice";
import {HeadLineComponent} from "../../features/head-line/head-line.component";
import {TextComponent} from "../../features/text/text.component";
import {BadgeComponent} from "../../features/badge/badge.component";
import {IconComponent} from "../../features/icon/icon.component";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    HeadLineComponent,
    TextComponent,
    BadgeComponent,
    IconComponent
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})

export class InvoiceComponent {
  invoice =signal<Invoice[]>([

  ]);

}
