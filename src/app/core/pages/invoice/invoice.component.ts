import { Component, signal, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from "../../../shared/service/invoice";
import { HeadLineComponent } from "../../../shared/component/head-line/head-line.component";
import { TextComponent } from "../../../shared/component/text/text.component";
import { BadgeComponent } from "../../../shared/component/badge/badge.component";
import { IconComponent } from "../../../shared/component/icon/icon.component";
import {Store} from "@ngrx/store";
import {invoiceAction} from "../../../shared/state/actions/invoice.action";
import {selectAllInvoices} from "../../../shared/state/selectors/invoice.selector";
import {InvoiceHeaderComponent} from "../../feature/invoice-header/invoice-header.component";
import {DrawerService} from "../../service/drawer.service";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    HeadLineComponent,
    TextComponent,
    BadgeComponent,
    IconComponent,
    InvoiceHeaderComponent
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {
  invoice = this.store.selectSignal(selectAllInvoices);

  constructor(private router: Router, private store: Store,
  private drawerService: DrawerService) { }

  ngOnInit() {
    this.store.dispatch(invoiceAction.loadInvoices())
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
  openNewInvoiceHandler() {
    console.log('New Invoice button clicked - opening drawer');
    this.drawerService.openDrawer('newInvoice'); // Use the DrawerService to open the drawer
  }

  triggerNewInvoice() {
    this.drawerService.openDrawer('newInvoice'); // Notify the service to open the drawer
  }


}
