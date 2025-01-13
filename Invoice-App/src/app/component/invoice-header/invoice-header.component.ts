import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ButtonComponent } from "../../features/button/button.component";
import { HeadLineComponent } from "../../features/head-line/head-line.component";
import { FilterComponent } from "../../features/filter/filter.component";
import { DataLengthComponent } from "../../features/data-length/data-length.component";

@Component({
  selector: 'app-invoice-header',
  standalone: true,
  imports: [
    HeadLineComponent,
    ButtonComponent,
    FilterComponent,
    DataLengthComponent
  ],
  templateUrl: './invoice-header.component.html',
  styleUrls: ['./invoice-header.component.css']
})
export class InvoiceHeaderComponent {
  @Input() invoiceCount: number = 0; // Accept the count as input
  @Output() statusFilter = new EventEmitter<string[]>();
  @Output() openNewInvoice = new EventEmitter<void>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  onFilterChange(statuses: string[]) {
    console.log('Header received statuses:', statuses);
    this.statusFilter.emit(statuses);
  }
  newInvoice(){
    console.log('New Invoice button clicked in InvoiceHeader');
    this.openNewInvoice.emit();
  }


  // Open drawer for new invoice
  // newInvoice() {
  //   // Update active drawer and open it
  //   this.router.navigate(['/new-invoice'], { relativeTo: this.activatedRoute }).then(success => {
  //     if (!success) {
  //       console.log('Navigate to new invoice failed');
  //     }
  //   });
  // }
}
