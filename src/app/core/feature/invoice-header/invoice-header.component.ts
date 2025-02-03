import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {HeadLineComponent} from "../../../shared/component/head-line/head-line.component";
import {DataLengthComponent} from "../../component/data-length/data-length.component";
import {FilterComponent} from "../../component/filter/filter.component";
import {ButtonComponent} from "../../../shared/component/button/button.component";
import {Invoice} from "../../../shared/service/invoice";
import {SliderComponent} from "../slider/slider.component";
import {FormComponent} from "../../pages/form/form.component";

@Component({
  selector: 'app-invoice-header',
  standalone: true,
  imports: [
    HeadLineComponent,
    DataLengthComponent,
    FilterComponent,
    ButtonComponent,
    SliderComponent,
    FormComponent

  ],
  templateUrl: './invoice-header.component.html',
  styleUrls: ['./invoice-header.component.css']
})
export class InvoiceHeaderComponent {
  @Input() invoiceCount: number = 0; // Accept the count as input
  @Output() statusFilter = new EventEmitter<string[]>();
  @Output() openNewInvoice = new EventEmitter<void>();
  isSliderVisible = false; // Controls slider visibility
  isEditMode = false; // Tracks whether the form is in edit mode
  selectedInvoice: Invoice | null = null; // Stores the invoice to edit

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
  openCreateSlider() {
    this.isEditMode = false; // Set to create mode
    this.selectedInvoice = null; // Reset for creating a new invoice
    this.isSliderVisible = true; // Show the slider
  }
  openEditSlider(invoice: Invoice) {
    this.isEditMode = true; // Set to edit mode
    this.selectedInvoice = invoice; // Set the invoice to edit
    this.isSliderVisible = true; // Show the slider
  }
  closeSlider() {
    this.isSliderVisible = false; // Hide the slider
    this.selectedInvoice = null; // Reset the selected invoice
  }
  onFormSubmit(invoice: Invoice) {
    if (this.isEditMode) {
      // Handle editing the invoice
      console.log('Editing Invoice:', invoice);
    } else {
      // Handle creating a new invoice
      console.log('Creating Invoice:', invoice);
    }
    this.closeSlider();
  }

}
