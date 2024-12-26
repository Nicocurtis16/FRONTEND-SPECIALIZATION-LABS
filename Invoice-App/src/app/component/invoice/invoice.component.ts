import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../service/data.service';
import { Invoice } from '../../service/invoice';
import { NgFor, NgIf, DatePipe, NgClass } from '@angular/common';
import { BadgeComponent } from '../../features/badge/badge.component';
import { HeadLineComponent } from '../../features/head-line/head-line.component';
import { TextComponent } from '../../features/text/text.component';
import {InvoiceHeaderComponent} from "../invoice-header/invoice-header.component";

@Component({
  selector: 'app-invoice',
  imports: [HttpClientModule, NgFor, BadgeComponent, HeadLineComponent, TextComponent, InvoiceHeaderComponent, NgIf],
  standalone: true,
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
// invoice.component.ts
export class InvoiceComponent implements OnInit {
  invoices: Invoice[] = [];
  displayedInvoices: Invoice[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadInvoices();
  }

  loadInvoices() {
    const storedData = this.dataService.getDataFromLocalStorage();
    if (storedData) {
      this.invoices = storedData;
      this.displayedInvoices = storedData;
    } else {
      this.dataService.fetchData().subscribe({
        next: (data) => {
          this.invoices = data;
          this.displayedInvoices = data;
        },
        error: (error) => {
          console.error('Error fetching invoices:', error);
        }
      });
    }
  }

  onFilterChange(selectedStatuses: string[]) {
    console.log('Received selected statuses:', selectedStatuses);
    if (!selectedStatuses || selectedStatuses.length === 0) {
      this.displayedInvoices = this.invoices;
    } else {
      this.displayedInvoices = this.invoices.filter(invoice =>
        selectedStatuses.includes(invoice.status)
      );
    }
    console.log('Filtered invoices:', this.displayedInvoices);
  }
}
