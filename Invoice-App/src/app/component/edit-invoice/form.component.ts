import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {HeadLineComponent} from "../../features/head-line/head-line.component";
import {DatePickerComponent} from "../../features/date-picker/date-picker.component";
import {PaymentTermsComponent} from "../../features/payment-terms/payment-terms.component";
import {TextComponent} from "../../features/text/text.component";
import {CurrencyPipe} from "@angular/common";
import {TextFieldComponent} from "../../features/text-field/text-field.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [
    ReactiveFormsModule,
    HeadLineComponent,
    DatePickerComponent,
    PaymentTermsComponent,
    TextComponent,
    CurrencyPipe,
    TextFieldComponent
  ],
  standalone: true
})
export class FormComponent implements OnInit {
  invoiceForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.invoiceForm = this.fb.group({
      senderAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country: ['', Validators.required]
      }),
      clientDetails: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: this.fb.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
          postCode: ['', Validators.required],
          country: ['', Validators.required]
        })
      }),
      invoiceDetails: this.fb.group({
        invoiceDate: [new Date().toISOString().split('T')[0], Validators.required],
        paymentTerms: [1, Validators.required],
        description: ['', Validators.required]
      }),
      items: this.fb.array([])
    });
  }
  ngOnInit(): void {}
  get items(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }
  // Create a new item group
  createItemGroup(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }
  // Add a new item to the form
  addItem(): void {
    this.items.push(this.createItemGroup());
  }
  // Remove an item from the form
  removeItem(index: number): void {
    this.items.removeAt(index);
  }
  // Calculate total for a specific item
  calculateItemTotal(control: AbstractControl): number {
    if (!(control instanceof FormGroup)) return 0;

    const quantity = Number(control.get('quantity')?.value) || 0;
    const price = Number(control.get('price')?.value) || 0;
    return quantity* price;
  }

  getControl(controlPath: string): FormControl {
    const control = this.invoiceForm.get(controlPath);
    if (!control) {
      throw new Error(`Control with path '${controlPath}' not found.`);
    }
    return control as FormControl;
  }
  // Submit the form
  onSubmit(): void {
    if (this.invoiceForm.valid) {
      console.log(this.invoiceForm.value);
    } else {
      this.markFormGroupTouched(this.invoiceForm);
      console.log(this.invoiceForm.value);

    }
  }
  // Helper method to mark all controls as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
