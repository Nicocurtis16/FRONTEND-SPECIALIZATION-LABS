import { Component, EventEmitter, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { HeadLineComponent } from "../head-line/head-line.component";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-payment-terms',
  standalone: true,
  imports: [HeadLineComponent, NgIf, NgForOf],
  templateUrl: './payment-terms.component.html',
  styleUrls: ['./payment-terms.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaymentTermsComponent),
      multi: true
    }
  ]
})
export class PaymentTermsComponent implements ControlValueAccessor {
  @Output() paymentTermChange = new EventEmitter<string>();

  isDropdownOpen: boolean = false;
  paymentTerms = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days'];
  selectedPaymentTerm: string = 'Net 30 Days';

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log('Dropdown is now:', this.isDropdownOpen);
  }

  selectPaymentTerm(term: string) {
    this.selectedPaymentTerm = term;
    this.paymentTermChange.emit(term);
    this.isDropdownOpen = false; // Close dropdown after selection
    this.onChange(term); // Notify the form about the change
    console.log('Selected payment term:', term);
  }

  // Implement ControlValueAccessor methods
  writeValue(value: string): void {
    if (value) {
      this.selectedPaymentTerm = value;
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Handle disabled state if necessary
  }
}
