import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  // showInvoiceList = true;
  // selectedInvoice: Invoice | null = null;
  // invoiceCount: number = 0; // Example count, replace with actual logic to get invoice count
  // isDrawerOpen = false; // State to track if the drawer is open
  // activeDrawer = ''; // Determines which drawer is shown
  //
  //
  //
  //
  //
  // constructor(
  //   private router: Router,
  //   private activatedRoute: ActivatedRoute,
  //   private drawerService: DrawerService // Inject the DrawerService here
  // ) {}

  ngOnInit() {
    // this.drawerService.drawerState$.subscribe((state) => {
    //   this.isDrawerOpen = state.isOpen;
    //   this.activeDrawer = state.type || '';
    // });
  }
  // Open the New Invoice drawer
  // newInvoice() {
  //   this.drawerService.openDrawer('newInvoice'); // Use the service to open the drawer
  // }
  //
  // // Open the Edit Invoice drawer
  // openEditDrawer() {
  //   this.drawerService.openDrawer('editInvoice'); // Use the service to open the drawer
  // }
  //
  // // Open any type of drawer (reusable method)
  // openDrawer(drawerType: string) {
  //   this.drawerService.openDrawer(drawerType); // Delegate to DrawerService
  // }
  //
  // closeDrawer() {
  //   this.drawerService.closeDrawer(); // Close the drawer using the service
  // }
  //
  // displayViewInvoice(invoice: Invoice) {
  //   this.router.navigate(['invoice', invoice.id]);
  // }
  //
  // goBackToInvoiceList() {
  //   this.showInvoiceList = true;
  //   this.selectedInvoice = null;
  // }
  //
  // onFilterChange($event: string[]) {
  //   // Handle filter changes if needed
  // }
}
