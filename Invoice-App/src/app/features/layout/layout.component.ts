import { Component } from '@angular/core';
import { SidebarComponent } from "../../component/sidebar/sidebar.component";
import { Router, NavigationEnd } from "@angular/router";
import { NewInvoiceComponent } from "../../component/new-invoice/new-invoice.component";
import { EditInvoiceComponent } from "../../component/edit-invoice/edit-invoice.component";
import { Invoice } from "../../service/invoice";
import {NgClass, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import {InvoiceHeaderComponent} from "../../component/invoice-header/invoice-header.component";

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
    EditInvoiceComponent,

  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  showInvoiceList = true;
  selectedInvoice: Invoice | null = null;

  invoiceCount: number =0 ;  // Example count, replace with actual logic to get invoice count

  showSideDrawer = false;  // Controls drawer visibility
  activeDrawer: 'newInvoice' | 'editInvoice' | null = null; // Tracks the active drawer
  isDrawerOpen = false; // State to track if the drawer is open

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;
        if (currentUrl.includes('/invoice') && currentUrl.includes('edit')) {
          this.openEditDrawer();
        } else {
          this.closeDrawer(); // Close the drawer on other routes
        }
      }
    });
  }

  // Open the New Invoice drawer
  // newInvoice($event: string) {
  //   this.activeDrawer = 'newInvoice';
  //   this.isDrawerOpen = true;
  // }
  newInvoice() {
    this.activeDrawer = 'newInvoice';
    this.isDrawerOpen = true;
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

  displayViewInvoice(invoice: Invoice) {
    this.router.navigate(['invoice', invoice.id]);
  }

  goBackToInvoiceList() {
    this.showInvoiceList = true;
    this.selectedInvoice = null;
  }

  onFilterChange($event: string[]) {

  }
}
