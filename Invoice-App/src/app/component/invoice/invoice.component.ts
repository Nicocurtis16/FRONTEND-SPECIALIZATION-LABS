import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../service/data.service';
import { Invoice } from '../../service/invoice';
import { NgFor, NgIf } from '@angular/common';
import { BadgeComponent } from '../../features/badge/badge.component';
import { HeadLineComponent } from '../../features/head-line/head-line.component';
import { TextComponent } from '../../features/text/text.component';
import { InvoiceHeaderComponent } from "../invoice-header/invoice-header.component";
import { DataLengthComponent } from '../../features/data-length/data-length.component';

@Component({
  selector: 'app-invoice',
  imports: [HttpClientModule, NgFor, BadgeComponent, HeadLineComponent, TextComponent, InvoiceHeaderComponent, NgIf],
  standalone: true,
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoices: Invoice[] = [];
  displayedInvoices: Invoice[] = [];
  invoiceCount: number = 0;
  @Output() viewInvoice = new EventEmitter<Invoice>();


  selectInvoice(invoice: Invoice) {
    console.log('Selected Invoice:', invoice); // Debug log
    this.viewInvoice.emit(invoice); // Emit selected invoice
  }

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadInvoices();
  }

  loadInvoices() {
    const storedData = this.dataService.getDataFromLocalStorage();
    if (storedData) {
      this.invoices = storedData;
      this.updateDisplayedInvoices(storedData);
    } else {
      this.dataService.fetchData().subscribe({
        next: (data) => {
          this.invoices = data;
          this.updateDisplayedInvoices(data);
        },
        error: (error) => {
          console.error('Error fetching invoices:', error);
        }
      });
    }
  }

  onFilterChange(selectedStatuses: string[]) {
    if (!selectedStatuses || selectedStatuses.length === 0) {
      this.updateDisplayedInvoices(this.invoices);
    } else {
      const filteredInvoices = this.invoices.filter(invoice =>
        selectedStatuses.includes(invoice.status)
      );
      this.updateDisplayedInvoices(filteredInvoices);
    }
  }

  updateDisplayedInvoices(data: Invoice[]) {
    this.displayedInvoices = data;
    this.invoiceCount = data.length; // Update the count dynamically
  }
}
