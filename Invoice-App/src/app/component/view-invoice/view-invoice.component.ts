import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TextComponent } from "../../features/text/text.component";
import { BadgeComponent } from "../../features/badge/badge.component";
import { ButtonComponent } from "../../features/button/button.component";
import { HeadLineComponent } from "../../features/head-line/head-line.component";
import { Invoice } from '../../service/invoice';
import {CommonModule, NgIf} from "@angular/common";
import {EditInvoiceComponent} from "../edit-invoice/edit-invoice.component";

@Component({
  selector: 'app-view-invoice',
  standalone: true,
  imports: [CommonModule,
    TextComponent,
    ButtonComponent,
    HeadLineComponent,
    NgIf, EditInvoiceComponent
  ],
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css'] // Corrected from 'styleUrl'
})
export class ViewInvoiceComponent {
  @Input() invoice: Invoice | null = null; // Input to receive invoice data
  @Output() back = new EventEmitter<void>(); // Output to emit back event
  showEditInvoice: boolean = false;

  goBack() {
    this.back.emit(); // Emit event to go back to the invoice list
  }
  handleEdit() {
    this.showEditInvoice = true;
    console.log('Edit button clicked');
    // Add your logic here
  }
  handleDelete() {
    console.log('Edit button clicked');
    // Add your logic here
  }
  handleMarkedAsPaid(){
    console.log('Edit button clicked');

  }

}
