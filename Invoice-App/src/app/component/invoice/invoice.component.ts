import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../service/data.service';
import { Invoice } from '../../service/invoice';
import { NgFor, NgIf } from '@angular/common';
import { BadgeComponent } from '../../features/badge/badge.component';
import { HeadLineComponent } from '../../features/head-line/head-line.component';
import { TextComponent } from '../../features/text/text.component';
import { InvoiceHeaderComponent } from "../invoice-header/invoice-header.component";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {selectAllInvoices, selectIsLoadingState} from "../../state/selectors/invoice.selector";
import {invoiceAction} from "../../state/actions/invoice.action";
import {DeleteInvoiceComponent} from "../delete-invoice/delete-invoice.component";
import {NoInvoiceComponent} from "../../features/no-invoice/no-invoice.component";

@Component({
  selector: 'app-invoice',
  imports: [HttpClientModule, NgFor, BadgeComponent, HeadLineComponent, TextComponent, InvoiceHeaderComponent, NgIf, NoInvoiceComponent],
  standalone: true,
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  isLoading=this.store.selectSignal(selectIsLoadingState);
  invoices = this.store.selectSignal(selectAllInvoices);
  displayedInvoices: Invoice[] = [];
  invoiceCount: number = 0;


  constructor(
    private store: Store,
    private dataService: DataService,
    private router: Router
  ) {}

  selectInvoice(invoice: Invoice) {
    this.router.navigate(['/invoice', invoice.id]);
  }
  ngOnInit() {
    // this.loadInvoices();
  if(!this.isLoading()){
    this.store.dispatch(invoiceAction.loadInvoices())
  }
  }

  // loadInvoices() {
  //   const storedData = this.dataService.getDataFromLocalStorage();
  //   if (storedData) {
  //     this.invoices() = storedData;
  //     this.updateDisplayedInvoices(storedData);
  //   } else {
  //     this.dataService.fetchData().subscribe({
  //       next: (data) => {
  //         this.invoices = data;
  //         this.updateDisplayedInvoices(data);
  //       },
  //       error: (error) => {
  //         console.error('Error fetching invoices:', error);
  //       }
  //     });
  //   }
  // }

  onFilterChange(selectedStatuses: string[]) {
    if (!selectedStatuses || selectedStatuses.length === 0) {
      this.updateDisplayedInvoices(this.invoices());
    } else {
      const filteredInvoices = this.invoices().filter(invoice =>
        selectedStatuses.includes(invoice.status)
      );
      this.updateDisplayedInvoices(filteredInvoices);
    }
  }

  updateDisplayedInvoices(data: Invoice[]) {
    this.displayedInvoices = data;
    this.invoiceCount = data.length; // Update the count dynamically
  }
  onDeleteInvoice(id: number) {
    this.store.dispatch(invoiceAction.deleteInvoice({ id: this.invoices.toString() }));
  }
}
