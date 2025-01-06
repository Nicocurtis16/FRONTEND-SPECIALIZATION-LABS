import { Component } from '@angular/core';
import {SidebarComponent} from "../../component/sidebar/sidebar.component";
import {InvoiceComponent} from "../../component/invoice/invoice.component";
import {ViewInvoiceComponent} from "../../component/view-invoice/view-invoice.component";
import {Invoice} from "../../service/invoice";
import {NgIf} from "@angular/common";
import {DeleteInvoiceComponent} from "../../component/delete-invoice/delete-invoice.component";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,

    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  showInvoiceList = true;
  selectedInvoice: Invoice | null = null;

  constructor(private router: Router) {}

  displayViewInvoice(invoice: Invoice) {
    this.router.navigate(['invoice', invoice.id]);
  }

  goBackToInvoiceList() {
    this.showInvoiceList = true; // Show the invoice list again
    this.selectedInvoice = null;
  }
}
