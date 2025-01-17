import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, AbstractControl} from '@angular/forms';
import { HeadLineComponent } from "../../features/head-line/head-line.component";
import { TextComponent } from "../../features/text/text.component";
import { TextFieldComponent } from "../../features/text-field/text-field.component";
import { DatePickerComponent } from "../../features/date-picker/date-picker.component";
import { PaymentTermsComponent } from "../../features/payment-terms/payment-terms.component";
import { NgForOf, NgIf} from "@angular/common";
import {ButtonComponent} from "../../features/button/button.component";
import { FormService} from "../../service/form.service";
import {Store} from "@ngrx/store";
import {invoiceAction} from "../../state/actions/invoice.action";
import {addDays} from "date-fns";
import {Invoice, Item} from "../../service/invoice";
import {selectActiveInvoice} from "../../state/selectors/invoice.selector";


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
  standalone: true,
  providers: [FormService],
})
export class FormComponent implements OnInit {
  @Input() formType: 'newInvoice' | 'editInvoice' = 'newInvoice';
  invoiceForm!: FormGroup;
  isEditMode: boolean = false;
 selectedInvoice = this.store.selectSignal(selectActiveInvoice)
  constructor(private fb: FormBuilder,
              private formService: FormService,
              private store :Store ,
  ) {}

  ngOnInit(): void {
    this.isEditMode = this.formType === 'editInvoice';
    this.initializeForm();

    if (this.isEditMode) {
      this.store.select(selectActiveInvoice).subscribe((invoice) => {
        if (invoice) {
          this.populateForm(invoice);
        }
      });
    }
  }



  private initializeForm() {
    this.invoiceForm = this.fb.group({
      id: [this.formService.generateId()],
      createdAt: [new Date(), Validators.required],
      paymentDue: ['', Validators.required],
      description: ['', Validators.required],
      paymentTerms: [1, Validators.required],
      clientName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      ],
      clientEmail: ['', [Validators.required, Validators.email]],
      status: ['pending'],
      senderAddress: this.fb.group({
        street: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        city: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        postCode: ['', Validators.required],
        country: [
          '',
          [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
        ],
      }),
      clientAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        postCode: ['', Validators.required],
        country: [
          '',
          [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
        ],
      }),
      items: this.fb.array([this.createItem()]),
      total: [{ value: 0 }],
    });
    this.calculatePaymentDueDate();
    this. setupItemTotalCalculation();



    // Add initial item
    this.addItem();


  }



  get items(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }

  private createItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
      total: [{ value: 0, disabled: true }],
    });
  }

  addItem() {
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }
  populateForm(invoice: Invoice): void {
    console.log('Populating form with invoice:', invoice);
    this.invoiceForm.patchValue(invoice);
    const itemsControl = this.invoiceForm.get('items') as FormArray;
    itemsControl.clear();

    if (invoice.items) {
      invoice.items.forEach((item) => {
        itemsControl.push(
          this.fb.group({
            name: [item.name, Validators.required],
            quantity: [item.quantity, [Validators.required, Validators.min(1)]],
            price: [item.price, [Validators.required]],
            total: [{ value: item.total, disabled: true }],
          })
        );
      });
    }
  }





  onSubmit() {
    if (this.invoiceForm.invalid) return;
    const formData = this.invoiceForm.getRawValue();
    if (this.isEditMode) {
      this.store.dispatch(invoiceAction.updateInvoice({invoice: formData}))
    } else {
      this.store.dispatch(invoiceAction.addInvocice({invoice : formData}))
    }
    this.invoiceForm.reset();
    console.log(formData)


  }
  calculatePaymentDueDate() {
    this.invoiceForm
      .get('paymentTerms')
      ?.valueChanges.subscribe((terms: number) => {
      const createdAt = this.invoiceForm.get('createdAt')?.value;
      if (createdAt) {
        const paymentDue = addDays(createdAt, terms);
        this.invoiceForm
          .get('paymentDue')
          ?.setValue(paymentDue, { emitEvent: false });
      }
    });
  }
  setupItemTotalCalculation(): void {
    const itemsArray = this.items;

    // itemsArray.controls.forEach((control) => {
    //   const quantityControl = control.get('quantity');
    //   const priceControl = control.get('price');
    //
    //   if (quantityControl && priceControl) {
    //     quantityControl.valueChanges.subscribe(() =>
    //       this.updateItemTotal(control)
    //     );
    //     priceControl.valueChanges.subscribe(() =>
    //       this.updateItemTotal(control)
    //     );
    //   }
    // });

    itemsArray.valueChanges.subscribe((items) => {
      const total = items.reduce(
        (acc :number, item : Item ) => acc + item.quantity * item.price,
        0
      );
      this.invoiceForm.get('total')?.setValue(total, { emitEvent: false });
    });
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
