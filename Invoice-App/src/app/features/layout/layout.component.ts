import { Component } from '@angular/core';
import {SidebarComponent} from "../../component/sidebar/sidebar.component";
import {InvoiceComponent} from "../../component/invoice/invoice.component";
import {ViewInvoiceComponent} from "../../component/view-invoice/view-invoice.component";
import {Invoice} from "../../service/invoice";
import {NgIf} from "@angular/common";
import {DeleteInvoiceComponent} from "../../component/delete-invoice/delete-invoice.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    ViewInvoiceComponent,
    InvoiceComponent,
    NgIf,
    DeleteInvoiceComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  showInvoiceList = true;
  selectedInvoice: Invoice | null = null;

  displayViewInvoice(invoice: Invoice) {
    console.log('Invoice clicked:', invoice);
    this.selectedInvoice = invoice;
    this.showInvoiceList = false; // Hide the invoice list
  }

  goBackToInvoiceList() {
    this.showInvoiceList = true; // Show the invoice list again
    this.selectedInvoice = null;
  }
}
