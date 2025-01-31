import { Component, signal, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from "../../../shared/service/invoice";
import { HeadLineComponent } from "../../../shared/component/head-line/head-line.component";
import { TextComponent } from "../../../shared/component/text/text.component";
import { BadgeComponent } from "../../../shared/component/badge/badge.component";
import { IconComponent } from "../../../shared/component/icon/icon.component";
import { DataService } from "../../../shared/service/data.service";
import {Store} from "@ngrx/store";
import {invoiceAction} from "../../../shared/state/actions/invoice.action";
import {selectAllInvoices} from "../../../shared/state/selectors/invoice.selector";

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
  invoice = this.store.selectSignal(selectAllInvoices);

  constructor(
    private dataService: DataService,
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit() {
    this.store.dispatch(invoiceAction.loadInvoices())

    // this.dataService.getData().subscribe(data => {
    //   this.invoice.set(data);
    // });
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
