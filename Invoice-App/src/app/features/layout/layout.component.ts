import { Component } from '@angular/core';
import {SidebarComponent} from "../../component/sidebar/sidebar.component";
import {ButtonComponent} from "../button/button.component";
import {InvoiceComponent} from "../../component/invoice/invoice.component";
import {ViewInvoiceComponent} from "../../component/view-invoice/view-invoice.component";
import {Invoice} from "../../service/invoice";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    ViewInvoiceComponent,
    InvoiceComponent,
    NgIf
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  showInvoiceList = true; // Control which component to show
  selectedInvoice: Invoice | null = null;

  displayViewInvoice(invoice:   Invoice) {
    this.selectedInvoice = invoice;
    this.showInvoiceList = false;
  }

  goBackToInvoiceList() {
    this.selectedInvoice = null;
    this.showInvoiceList = true;
  }
}
