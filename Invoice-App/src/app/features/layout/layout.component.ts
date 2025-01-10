import { Component } from '@angular/core';
import {SidebarComponent} from "../../component/sidebar/sidebar.component";
import {InvoiceComponent} from "../../component/invoice/invoice.component";
import {ViewInvoiceComponent} from "../../component/view-invoice/view-invoice.component";
import {Invoice} from "../../service/invoice";
import {NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {DeleteInvoiceComponent} from "../../component/delete-invoice/delete-invoice.component";
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from "@angular/router";
import {NewInvoiceComponent} from "../../component/new-invoice/new-invoice.component";
import {EditInvoiceComponent} from "../../component/edit-invoice/edit-invoice.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,

    RouterOutlet,

    NgIf,
    NgSwitchCase,
    NgSwitch,
    NewInvoiceComponent,
    EditInvoiceComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  showInvoiceList = true;
  selectedInvoice: Invoice | null = null;


  displayViewInvoice(invoice: Invoice) {
    this.router.navigate(['invoice', invoice.id]);
  }

  goBackToInvoiceList() {
    this.showInvoiceList = true; // Show the invoice list again
    this.selectedInvoice = null;
  }

  // Open the New Invoice drawer
  newInvoice() {
    this.activeDrawer = 'newInvoice';
    this.isDrawerOpen = true;
  }

  showSideDrawer = false; // Controls drawer visibility
  activeDrawer: 'newInvoice' | 'editInvoice' | null = null; // Tracks the active drawer

  isDrawerOpen = false; // State to track if the drawer is open

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Listen to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;
        // Check if the current route is for editing
        if (currentUrl.includes('/invoice') && currentUrl.includes('edit')) {
          this.openEditDrawer();
        } else {
          this.closeDrawer(); // Close the drawer on other routes
        }
      }
    });
  }

  // Open the Edit Invoice drawer
  openEditDrawer() {
    this.activeDrawer = 'editInvoice';
    this.isDrawerOpen = true;
  }

  // Close the drawer
  closeDrawer() {
    this.isDrawerOpen = false;
    this.activeDrawer = null;
  }
}
