import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {HeadLineComponent} from "../../features/head-line/head-line.component";
import {TextComponent} from "../../features/text/text.component";
import {PaymentTermsComponent} from "../../features/payment-terms/payment-terms.component";
import {DatePickerComponent} from "../../features/date-picker/date-picker.component";
import {ButtonComponent} from "../../features/button/button.component";

@Component({
  selector: 'app-edit-invoice',
  standalone: true,
  imports: [
    SidebarComponent,
    HeadLineComponent,
    TextComponent,
    PaymentTermsComponent,
    DatePickerComponent,
    ButtonComponent
  ],
  templateUrl: './edit-invoice.component.html',
  styleUrl: './edit-invoice.component.css'
})
export class EditInvoiceComponent {
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
}
