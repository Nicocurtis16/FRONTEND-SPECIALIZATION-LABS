import { Component, computed, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { DataService } from '../../service/data.service';
import { Invoice } from '../../service/invoice';
import { selectFilteredInvoices, selectIsLoadingState } from '../../state/selectors/invoice.selector';
import { invoiceAction } from '../../state/actions/invoice.action';

import { BadgeComponent } from '../../features/badge/badge.component';
import { HeadLineComponent } from '../../features/head-line/head-line.component';
import { TextComponent } from '../../features/text/text.component';
import { InvoiceHeaderComponent } from '../invoice-header/invoice-header.component';
import { NoInvoiceComponent } from '../../features/no-invoice/no-invoice.component';
import { IconComponent } from '../../features/icon/icon.component';

@Component({
  selector: 'app-invoice',
  imports: [
    HttpClientModule,
    NgFor,
    BadgeComponent,
    HeadLineComponent,
    TextComponent,
    InvoiceHeaderComponent,
    NgIf,
    NoInvoiceComponent,
    IconComponent,
  ],
  standalone: true,
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  providers: [CurrencyPipe], // Include CurrencyPipe in providers
})
export class InvoiceComponent implements OnInit {
  isLoading = this.store.selectSignal(selectIsLoadingState);
  invoices = this.store.selectSignal(selectFilteredInvoices); // All invoices from state
  selectedStatuses: string[] = []; // Filter criteria
  formattedTotal: string = '';

  // Computed signals for filtered data and count
  displayedInvoices = computed(() => {
    console.log('Recalculating displayed invoices:', this.selectedStatuses, this.invoices());
    if (!this.selectedStatuses.length) {
      return this.invoices(); // Show all invoices if no filter
    }
    return this.invoices().filter(invoice =>
      this.selectedStatuses.includes(invoice.status)
    );
  });

  invoiceCount = computed(() => this.displayedInvoices().length);

  constructor(
    private store: Store,
    private dataService: DataService,
    private router: Router,
    private currencyPipe: CurrencyPipe // Properly injected CurrencyPipe
  ) {}

  ngOnInit() {
    if (!this.isLoading()) {
      this.store.dispatch(invoiceAction.loadInvoices());
    }
  }

  getFormattedTotal(total: number): string {
    return this.currencyPipe.transform(total, 'GBP', 'symbol', '1.2-2') || '';
  }

  selectInvoice(invoice: Invoice) {
    this.router.navigate(['/invoice', invoice.id]);
  }

  onFilterChange(selectedStatuses: string[]) {
    console.log('Selected Statuses:', selectedStatuses);
    this.selectedStatuses = selectedStatuses; // Update filter criteria
  }

  onDeleteInvoice(id: string) {
    this.store.dispatch(invoiceAction.deleteInvoice({ id }));
  }
}
