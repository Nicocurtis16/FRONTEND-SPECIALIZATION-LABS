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

    {
      id: "RT3080",
      "createdAt": "2021-08-18",
      paymentDue: "2021-08-19",
      "description": "Re-branding",
      "paymentTerms": 1,
      clientName: "Jensen Huang",
      "clientEmail": "jensenh@mail.com",
      status: "paid",
      "senderAddress": {
        "street": "19 Union Terrace",
        "city": "London",
        "postCode": "E1 3EZ",
        "country": "United Kingdom"
      },
      "clientAddress": {
        "street": "106 Kendell Street",
        "city": "Sharrington",
        "postCode": "NR24 5WQ",
        "country": "United Kingdom"
      },
      "items": [
        {
          "name": "Brand Guidelines",
          "quantity": 1,
          "price": 1800.90,
          total: 1800.90
        }
      ],
      "total": 1800.90
    },
  ]);

}
