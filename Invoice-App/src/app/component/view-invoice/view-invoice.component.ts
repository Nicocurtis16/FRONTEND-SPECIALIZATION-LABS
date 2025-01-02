import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../../features/button/button.component';
import { HeadLineComponent } from '../../features/head-line/head-line.component';
import { Invoice } from '../../service/invoice';
import {DataService} from "../../service/data.service";
import { CommonModule, NgIf } from '@angular/common';
import { DeleteInvoiceComponent } from '../delete-invoice/delete-invoice.component'
import { Router } from '@angular/router';
import {TextComponent} from "../../features/text/text.component";
import {BadgeComponent} from "../../features/badge/badge.component";

@Component({
  selector: 'app-view-invoice',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    HeadLineComponent,
    NgIf,
    DeleteInvoiceComponent,
    TextComponent,
    BadgeComponent
  ],
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent {
  @Input() invoice: Invoice | null = null;
  @Output() back = new EventEmitter<void>();
  showEditInvoice: boolean = false;
  showDeleteConfirmation: boolean = false;


  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  goBack() {
    this.back.emit();
  }

  handleDelete() {
    this.showDeleteConfirmation = true;
  }
  handleEdit() {
    this.showEditInvoice = true;
    console.log('Edit button clicked');
    // Add your logic here
  }
  confirmDelete() {
    if (this.invoice?.id) {
      this.dataService.deleteInvoice(this.invoice.id).subscribe(success => {
        if (success) {
          this.showDeleteConfirmation = false;
          this.router.navigate(['/invoices']);
        }
      });
    }
  }
  handleMarkedAsPaid(){
    console.log('Edit button clicked');

  }


  cancelDelete() {
    this.showDeleteConfirmation = false;
  }
}
