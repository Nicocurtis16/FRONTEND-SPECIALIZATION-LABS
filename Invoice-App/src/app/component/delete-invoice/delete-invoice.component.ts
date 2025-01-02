import { Component, EventEmitter, Output } from '@angular/core';
import {HeadLineComponent} from "../../features/head-line/head-line.component";
import {TextComponent} from "../../features/text/text.component";
import {ButtonComponent} from "../../features/button/button.component";

@Component({
  selector: 'app-delete-invoice',
  standalone: true,
  imports: [
    HeadLineComponent,
    TextComponent,
    ButtonComponent
  ],
  templateUrl: './delete-invoice.component.html',
  styleUrls: ['./delete-invoice.component.css'] // Corrected property name
})
export class DeleteInvoiceComponent {
  @Output() confirmDelete = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();

  onConfirm() {
    this.confirmDelete.emit();
  }

  handleCancel() {
    this.cancelDelete.emit();
  }

  handleDelete() {
    return function () {
    };
  }
}
