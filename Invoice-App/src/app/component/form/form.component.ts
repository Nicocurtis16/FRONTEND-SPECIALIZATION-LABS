import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, AbstractControl} from '@angular/forms';
import { HeadLineComponent } from "../../features/head-line/head-line.component";
import { TextComponent } from "../../features/text/text.component";
import { TextFieldComponent } from "../../features/text-field/text-field.component";
import { DatePickerComponent } from "../../features/date-picker/date-picker.component";
import { PaymentTermsComponent } from "../../features/payment-terms/payment-terms.component";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {ButtonComponent} from "../../features/button/button.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [
    ReactiveFormsModule,
    HeadLineComponent,
    TextComponent,
    TextFieldComponent,
    DatePickerComponent,
    PaymentTermsComponent,
    NgForOf,
    ButtonComponent,
    NgIf
  ],
  standalone: true
})
export class FormComponent implements OnInit {
  @Input() formType: 'newInvoice' | 'editInvoice' = 'newInvoice';
  invoiceForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.isEditMode = this.formType === 'editInvoice';
    this.initializeForm();
  }

  private initializeForm() {
    this.invoiceForm = this.fb.group({
      senderAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country: ['', Validators.required],
      }),
      clientDetails: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: this.fb.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
          postCode: ['', Validators.required],
          country: ['', Validators.required],
        }),
      }),
      description: ['', Validators.required],
      paymentDue: ['', Validators.required],
      total: ['', [Validators.required, Validators.min(0)]],
      status: ['', Validators.required],
      paymentTerm: ['', Validators.required],
      items: this.fb.array([])
    });

    // Add initial item
    this.addItem();

    if (this.isEditMode) {
      this.loadInvoiceData();
    }
  }

  private loadInvoiceData() {
    const invoiceData = {
      id: 'INV-1234',
      clientName: 'John Doe',
      paymentDue: '2025-02-15',
      total: 1000,
      status: 'Pending',
      paymentTerm: 'Net 30 Days',
    };

    this.invoiceForm.patchValue(invoiceData);

    // Load items for the edit mode
    const items = this.invoiceForm.get('items') as FormArray;
    items.push(this.fb.group({ name: 'Item 1', quantity: 1, price: 100 }));
    items.push(this.fb.group({ name: 'Item 2', quantity: 2, price: 150 }));
  }

  get items(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }

  private createItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  addItem() {
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onSubmit() {
    if (this.invoiceForm.invalid) {
      return;
    }

    const formData = this.invoiceForm.getRawValue();
    if (this.isEditMode) {
      console.log('Edited Invoice Data:', formData);
    } else {
      console.log('New Invoice Data:', formData);
    }
  }

  onCancel() {
    console.log('Form cancelled');
  }
  calculateItemTotal(item: AbstractControl): number {
    const quantity = item.get('quantity')?.value || 0;
    const price = item.get('price')?.value || 0;
    return quantity * price;
  }

  protected readonly String = String;

  handleEdit() {

  }

  onDiscard() {

  }

  onSaveAsDraft() {

  }
}
