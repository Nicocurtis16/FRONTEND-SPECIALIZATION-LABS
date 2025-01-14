import { Component } from '@angular/core';
import {ButtonComponent} from "../../features/button/button.component";
import {DatePickerComponent} from "../../features/date-picker/date-picker.component";
import {HeadLineComponent} from "../../features/head-line/head-line.component";
import {NgIf} from "@angular/common";
import {PaymentTermsComponent} from "../../features/payment-terms/payment-terms.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TextComponent} from "../../features/text/text.component";

@Component({
  selector: 'app-new-invoice',
  standalone: true,
    imports: [
        ButtonComponent,
        DatePickerComponent,
        HeadLineComponent,
        NgIf,
        PaymentTermsComponent,
        ReactiveFormsModule,
        TextComponent
    ],
  templateUrl: './new-invoice.component.html',
  styleUrl: './new-invoice.component.css'
})
export class NewInvoiceComponent {
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
