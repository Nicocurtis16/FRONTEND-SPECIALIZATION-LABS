import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../component/sidebar/sidebar.component";
import { Router, NavigationEnd } from "@angular/router";
import { NewInvoiceComponent } from "../../component/new-invoice/new-invoice.component";
import { FormComponent } from "../../component/edit-invoice/./form.component";
import { Invoice } from "../../service/invoice";
import { NgClass, NgIf, NgSwitch, NgSwitchCase } from "@angular/common";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { InvoiceHeaderComponent } from "../../component/invoice-header/invoice-header.component";
import { DrawerService } from '../../service/drawer.service';

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
    FormComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  showInvoiceList = true;
  selectedInvoice: Invoice | null = null;
  invoiceCount: number = 0; // Example count, replace with actual logic to get invoice count
  isDrawerOpen = false; // State to track if the drawer is open
  activeDrawer = ''; // Determines which drawer is shown





  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private drawerService: DrawerService // Inject the DrawerService here
  ) {}

  ngOnInit() {
    this.drawerService.drawerState$.subscribe((state) => {
      this.isDrawerOpen = state.isOpen;
      this.activeDrawer = state.type || '';
    });
  }
  // Open the New Invoice drawer
  newInvoice() {
    this.drawerService.openDrawer('newInvoice'); // Use the service to open the drawer
  }

  // Open the Edit Invoice drawer
  openEditDrawer() {
    this.drawerService.openDrawer('editInvoice'); // Use the service to open the drawer
  }

  // Open any type of drawer (reusable method)
  openDrawer(drawerType: string) {
    this.drawerService.openDrawer(drawerType); // Delegate to DrawerService
  }

  closeDrawer() {
    this.drawerService.closeDrawer(); // Close the drawer using the service
  }

  displayViewInvoice(invoice: Invoice) {
    this.router.navigate(['invoice', invoice.id]);
  }

  goBackToInvoiceList() {
    this.showInvoiceList = true;
    this.selectedInvoice = null;
  }

  onFilterChange($event: string[]) {
    // Handle filter changes if needed
  }
}
