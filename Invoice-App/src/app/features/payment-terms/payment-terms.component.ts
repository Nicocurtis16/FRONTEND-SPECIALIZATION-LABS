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
  @Output() paymentTermChange = new EventEmitter<number>();

  isDropdownOpen: boolean = false;
  paymentTerms :Payment[] = [{
    string: 'Next 1 day',
    number: 1
  },
    {
      string: 'Next 7 days',
      number: 7
    },
    {
      string: 'Next 14 days',
      number: 14
    },
    {
      string: 'Next 30 days',
      number: 30
    }

  ]
  selectedPaymentTerm: string = "Next 30 days";

  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log('Dropdown is now:', this.isDropdownOpen);
  }

  selectPaymentTerm(term: Payment) {
    this.selectedPaymentTerm = term.string;
    this.paymentTermChange.emit(term.number);
    this.isDropdownOpen = false; // Close dropdown after selection
    this.onChange(term.number); // Notify the form about the change
    console.log('Selected payment term:', term);
  }

  // Implement ControlValueAccessor methods
  writeValue(value: string): void {
    if (value) {
      this.selectedPaymentTerm = value;
    }
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Handle disabled state if necessary
  }

}
interface Payment {
  string: string;
  number: number;
}
