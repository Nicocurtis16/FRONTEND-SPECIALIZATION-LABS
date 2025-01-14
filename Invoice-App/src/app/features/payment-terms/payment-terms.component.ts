import { Component, EventEmitter, Output } from '@angular/core';
import { HeadLineComponent } from "../head-line/head-line.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-payment-terms',
  standalone: true,
  imports: [HeadLineComponent, NgIf, NgForOf],
  templateUrl: './payment-terms.component.html',
  styleUrls: ['./payment-terms.component.css']
})
export class PaymentTermsComponent {
  @Output() paymentTermChange = new EventEmitter<string>();

  isDropdownOpen: boolean = false;
  paymentTerms = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days'];
  selectedPaymentTerm: string = 'Net 30 Days';

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log('Dropdown is now:', this.isDropdownOpen);
  }

  selectPaymentTerm(term: string) {
    this.selectedPaymentTerm = term;
    this.paymentTermChange.emit(term);
    this.isDropdownOpen = false; // Close dropdown after selection
    console.log('Selected payment term:', term);
  }
}
