import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {HeadLineComponent} from "../../../shared/component/head-line/head-line.component";
import {DataLengthComponent} from "../../component/data-length/data-length.component";
import {FilterComponent} from "../../component/filter/filter.component";
import {ButtonComponent} from "../../../shared/component/button/button.component";

@Component({
  selector: 'app-invoice-header',
  standalone: true,
  imports: [
    HeadLineComponent,
    DataLengthComponent,
    FilterComponent,
    ButtonComponent

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



}
