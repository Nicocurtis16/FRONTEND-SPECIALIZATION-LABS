import { Component, signal, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from "../../service/invoice";
import { HeadLineComponent } from "../../features/head-line/head-line.component";
import { TextComponent } from "../../features/text/text.component";
import { BadgeComponent } from "../../features/badge/badge.component";
import { IconComponent } from "../../features/icon/icon.component";
import { DataService } from "../../service/data.service";

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
export class InvoiceComponent implements OnInit {
  invoice = signal<Invoice[]>([]);

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.invoice.set(data);
    });
  }

  viewInvoice(invoice: Invoice) {
    // Navigate with query params containing invoice data
    this.router.navigate(['/dashboard/view'], {
      queryParams: {
        id: invoice.id,
        clientName: invoice.clientName,
        total: invoice.total,
        status: invoice.status,
        paymentDue: invoice.paymentDue,
        description: invoice.description,
        clientEmail: invoice.clientEmail,
        // Converting complex objects to strings
        senderAddress: JSON.stringify(invoice.senderAddress),
        clientAddress: JSON.stringify(invoice.clientAddress),
        items: JSON.stringify(invoice.items)
      }
    });
  }
}
