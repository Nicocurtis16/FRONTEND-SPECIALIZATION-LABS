import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {HeadLineComponent} from "../../features/head-line/head-line.component";
import {TextComponent} from "../../features/text/text.component";
import {PaymentTermsComponent} from "../../features/payment-terms/payment-terms.component";
import {DatePickerComponent} from "../../features/date-picker/date-picker.component";
import {ButtonComponent} from "../../features/button/button.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-invoice',
  standalone: true,
  imports: [
    SidebarComponent,
    HeadLineComponent,
    TextComponent,
    PaymentTermsComponent,
    DatePickerComponent,
    ButtonComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './edit-invoice.component.html',
  styleUrl: './edit-invoice.component.css'
})
export class EditInvoiceComponent {
  editForm: FormGroup;
  constructor( private fb: FormBuilder ) {
    this.editForm = this.fb.group({
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
      country: ['', Validators.required],
      clientName: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientStreetAddress: ['', Validators.required],
      clientCity: ['', Validators.required],
      clientPostCode: ['', Validators.required],
      clientCountry: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      projectDescription: ['', Validators.required],
      itemName: ['', Validators.required],
      itemQuantity: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      itemPrice: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  selectedDate: any;

  onDateSelected(date: string) {
    this.selectedDate = date;
    console.log('Selected date:', this.selectedDate);
  }

  handleButtonClick(delete1: string) {

  }

  getFieldError(date: string) {
    return "";
  }

  protected readonly onsubmit = onsubmit;


  get f() {
    return this.editForm.controls; // Explicit typing ensures static type access
  }

  onSubmit() {
    if (this.editForm.valid) {
      console.log(this.editForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  handleEdit() {

  }
}
